#!/usr/bin/env bash
#
# Updates labels in our OSS repos - those which are public, non-archived, and not a fork.
#
# https://github.com/organizations/aspect-build/settings/repository-defaults is used for new repos.
# After changing those default labels, we need to copy new labels to other repos.
# To use this script, first run `gh auth login`
set -o nounset -o errexit -o pipefail

function get() {
    # Reduce API requests if you're okay with stale data:
    # --cache 6h
    gh api --header 'Accept: application/vnd.github.v3+json' --method GET --field per_page=100 "$@"
}

function post() {
    gh api --header 'Accept: application/vnd.github.v3+json' --method POST "$@"
}

for repo in $(get /orgs/aspect-build/repos --jq '.[] | select(.archived == false and .private == false and .fork == false) | .name'); do
    # TODO(alexeagle): check if $name is already in $labels so we don't hit the API with a bunch of duplicates
    # labels=$(get /repos/aspect-build/$repo/labels --jq '.[].name')
    # TODO(alexeagle): for labels that already existed, perhaps we want to PATCH to update their description or color
    while read -r in; do
        echo "$in" | post "/repos/aspect-build/$repo/labels" --input - || true
    done < <(jq '.[]' --compact-output <process/github-issues/oss_labels.json)
done
