This webhook is for triggering docs updates on ruleset releases.

- used by the GitHub App https://github.com/settings/apps/stardoc-importer
- note, that App is under github.com/alexeagle ownership so that it can be installed in multiple orgs (aspect-build, bazel-contrib, etc)
- This package is a Cloudflare Worker
- It's purpose is only to trigger the https://github.com/aspect-build/docs/actions/workflows/ingest_stardocs.yaml workflow.

## Developing

(optional) For local dev, install dependencies:

    bazel run @pnpm -- --dir=$PWD install

Authorize wrangler to Cloudflare:

    bazel run login

Deploy the code live to production:

    bazel run publish
