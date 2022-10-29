name: Bug Report
description: File a bug report to help us improve
title: "[Bug]: "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
        **We use GitHub issues only for feature requests and bug reports.** For support questions, please use [Bazel slack](https://slack.bazel.build)**.  We prioritize support requests from our paid support customers, see [aspect.dev](https://www.aspect.dev/services#support).

  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true

  - type: textarea
    id: version
    attributes:
      label: Version
      description: Please tell us about your environment
      value: |
        - Development (host) and target OS/architectures:
        - `bazel --version`: 
        - Version of the aspect rules, or other relevant rules from your `WORKSPACE` or `MODULE.bazel` file:
        - Language(s) and/or frameworks involved:
    validations:
      required: true

  - type: textarea
    id: repro
    attributes:
      label: How to reproduce
      description: Your bug is more likely to be resolved if you provide the steps to reproduce, and if possible a minimal demo of the problem.
      render: shell

  - type: textarea
    id: other
    attributes:
      label: Any other information?
      description: |
        (e.g. detailed explanation, stacktraces, related issues, suggestions how to fix, things you've tried, links for us to have context, eg. stackoverflow, gitter, etc)
  - type: markdown
    attributes:
      value: |
        **I'd like my bug fixed right away!** you can help fund our open source work at the same time: donate a [bug bounty](https://opencollective.com/aspect-build/)
        Just let us know on this issue that you'd like to fund it.