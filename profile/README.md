# Aspect Build

Aspect makes Bazel fast and approachable. We build open-source Bazel rulesets used by thousands of teams, and offer [Aspect Workflows](https://aspect.build) — managed, self-hosted CI runners with remote caching and RBE deployed in your cloud.

📖 **Docs:** [docs.aspect.build](https://docs.aspect.build) &nbsp;|&nbsp;
💬 **Slack:** [slack.aspect.build](http://slack.aspect.build/) &nbsp;|&nbsp;
🌐 **Website:** [aspect.build](https://aspect.build)

---

## Aspect CLI

| Repository | Description | Release | CI |
|------------|-------------|---------|-----|
| [aspect-cli](https://github.com/aspect-build/aspect-cli) | Programmable task runner built on top of Bazel — configure custom commands with the [Aspect Extension Language (AXL)](https://docs.aspect.build/axl). | [![release](https://img.shields.io/github/v/release/aspect-build/aspect-cli?sort=semver&label=)](https://github.com/aspect-build/aspect-cli/releases) | [![ci](https://github.com/aspect-build/aspect-cli/actions/workflows/ci-github-runners.yaml/badge.svg)](https://github.com/aspect-build/aspect-cli/actions/workflows/ci-github-runners.yaml) |
| [aspect-gazelle](https://github.com/aspect-build/aspect-gazelle) | Pre-compiled Gazelle binaries with BUILD file generators for JS, Python, and AXL. | [![release](https://img.shields.io/github/v/release/aspect-build/aspect-gazelle?sort=semver&label=)](https://github.com/aspect-build/aspect-gazelle/releases) | [![ci](https://github.com/aspect-build/aspect-gazelle/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/aspect-gazelle/actions/workflows/ci-vanilla-bazel.yaml) |

## JavaScript and TypeScript

| Repository | Description | Release | CI |
|------------|-------------|---------|-----|
| [rules_js](https://github.com/aspect-build/rules_js) | High-performance Bazel rules for JS and Node.js using a pnpm-based layout. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_js?sort=semver&label=)](https://github.com/aspect-build/rules_js/releases) | [![ci](https://github.com/aspect-build/rules_js/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_js/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_ts](https://github.com/aspect-build/rules_ts) | Canonical Bazel rules for TypeScript, built on `rules_js`. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_ts?sort=semver&label=)](https://github.com/aspect-build/rules_ts/releases) | [![ci](https://github.com/aspect-build/rules_ts/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_ts/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_swc](https://github.com/aspect-build/rules_swc) | Bazel rules for the SWC Rust-based JS compiler. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_swc?sort=semver&label=)](https://github.com/aspect-build/rules_swc/releases) | [![ci](https://github.com/aspect-build/rules_swc/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_swc/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_esbuild](https://github.com/aspect-build/rules_esbuild) | Bazel rules for the esbuild bundler — hermetic, no `npm install`. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_esbuild?sort=semver&label=)](https://github.com/aspect-build/rules_esbuild/releases) | [![ci](https://github.com/aspect-build/rules_esbuild/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_esbuild/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_webpack](https://github.com/aspect-build/rules_webpack) | Bazel rules for Webpack. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_webpack?sort=semver&label=)](https://github.com/aspect-build/rules_webpack/releases) | [![ci](https://github.com/aspect-build/rules_webpack/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_webpack/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_rollup](https://github.com/aspect-build/rules_rollup) | Bazel rules for the Rollup JS bundler. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_rollup?sort=semver&label=)](https://github.com/aspect-build/rules_rollup/releases) | [![ci](https://github.com/aspect-build/rules_rollup/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_rollup/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_terser](https://github.com/aspect-build/rules_terser) | Bazel rules for the Terser JS minifier. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_terser?sort=semver&label=)](https://github.com/aspect-build/rules_terser/releases) | [![ci](https://github.com/aspect-build/rules_terser/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_terser/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_jest](https://github.com/aspect-build/rules_jest) | Bazel rules to run Jest tests. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_jest?sort=semver&label=)](https://github.com/aspect-build/rules_jest/releases) | [![ci](https://github.com/aspect-build/rules_jest/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_jest/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_jasmine](https://github.com/aspect-build/rules_jasmine) | Bazel rules to run Jasmine tests. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_jasmine?sort=semver&label=)](https://github.com/aspect-build/rules_jasmine/releases) | [![ci](https://github.com/aspect-build/rules_jasmine/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_jasmine/actions/workflows/ci-vanilla-bazel.yaml) |
| [rules_cypress](https://github.com/aspect-build/rules_cypress) | Bazel rules to run Cypress e2e tests. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_cypress?sort=semver&label=)](https://github.com/aspect-build/rules_cypress/releases) | [![ci](https://github.com/aspect-build/rules_cypress/actions/workflows/ci.yaml/badge.svg)](https://github.com/aspect-build/rules_cypress/actions/workflows/ci.yaml) |

## Python

| Repository | Description | Release | CI |
|------------|-------------|---------|-----|
| [rules_py](https://github.com/aspect-build/rules_py) | High-performance Python rules with native `uv` integration and strict hermeticity. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_py?sort=semver&label=)](https://github.com/aspect-build/rules_py/releases) | [![ci](https://github.com/aspect-build/rules_py/actions/workflows/ci-workflows.yaml/badge.svg)](https://github.com/aspect-build/rules_py/actions/workflows/ci-workflows.yaml) |

## Utilities and Libraries

| Repository | Description | Release | CI |
|------------|-------------|---------|-----|
| [rules_lint](https://github.com/aspect-build/rules_lint) | Linters and formatters as Bazel actions — 20+ tools, supports RBE. | [![release](https://img.shields.io/github/v/release/aspect-build/rules_lint?sort=semver&label=)](https://github.com/aspect-build/rules_lint/releases) | [![ci](https://github.com/aspect-build/rules_lint/actions/workflows/ci-vanilla-bazel.yaml/badge.svg)](https://github.com/aspect-build/rules_lint/actions/workflows/ci-vanilla-bazel.yaml) |
| [toml.bzl](https://github.com/aspect-build/toml.bzl) | Bazel library for consuming TOML files in repository rules. | [![release](https://img.shields.io/github/v/release/aspect-build/toml.bzl?sort=semver&label=)](https://github.com/aspect-build/toml.bzl/releases) | [![ci](https://github.com/aspect-build/toml.bzl/actions/workflows/ci.yaml/badge.svg)](https://github.com/aspect-build/toml.bzl/actions/workflows/ci.yaml) |

## Examples and Templates

| Repository | Description |
|------------|-------------|
| [bazel-examples](https://github.com/aspect-build/bazel-examples) | Polyglot reference monorepo across Go, Python, Java, JS, Rust, Ruby, and more. Live test bed for Aspect's CI integrations. |
| [aspect-workflows-template](https://github.com/aspect-build/aspect-workflows-template) | Scaffold template for bootstrapping an Aspect Workflows project. |

## Under `bazel-contrib`

Projects Aspect authors or maintains under the community `bazel-contrib` org:

| Repository | Description |
|------------|-------------|
| [bazel-lib](https://github.com/bazel-contrib/bazel-lib) | Common utility rules and functions for writing Bazel rules in Starlark. Originally authored by Aspect; donated to `bazel-contrib`. |
| [rules_oci](https://github.com/bazel-contrib/rules_oci) | Bazel rules for building OCI container images without Docker. Built by Aspect under `bazel-contrib` in collaboration with Google. |
| [rules_nodejs](https://github.com/bazel-contrib/rules_nodejs) | Bazel rules for fetching the Node.js binary and `@bazel/runfiles`. Long-term maintained by Aspect. |
| [publish-to-bcr](https://github.com/bazel-contrib/publish-to-bcr) | Automation for publishing Bazel module releases to the Bazel Central Registry. Originally built by Aspect; donated to `bazel-contrib`. |

## Contracted Maintenance

Projects owned by third parties that Aspect maintains under contract:

| Repository | Owner | Description |
|------------|-------|-------------|
| [rules_apko](https://github.com/chainguard-dev/rules_apko) | Chainguard | Bazel rules for apko — builds OCI images from APK packages without a Dockerfile. |
