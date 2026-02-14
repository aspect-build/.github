load("@npm//:defs.bzl", "npm_link_all_packages")
load("@npm//packages/ingest-stardocs-webhook:wrangler/package_json.bzl", "bin")

npm_link_all_packages(name = "node_modules")

# Run this first to authenticate
bin.wrangler_binary(
    name = "login",
    args = ["login"],
)

bin.wrangler_binary(
    name = "publish",
    args = ["publish"],
    data = [
        "index.js",
        "wrangler.toml",
    ],
    # Something about action deduplication or rewinding.
    # Anyway, this tag is needed even though its not a test.
    tags = ["requires-network"],
)
