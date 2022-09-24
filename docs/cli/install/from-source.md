---
title: Install Thabala CLI from source
---

Thabala CLI is an open source software. As such, the codebases are freely available to download and build from source. You might install form source if you want the latest code or want to install `thabala-cli` from a specific commit. This might be helpful when you are contributing changes, or if you want to debug a past change.

To download form source, you would clone the repositories from GitHub, making a local copy, and then install the local version using `pip`.

### Installing Thabala CLI

To install `thabala-cli` from the GitHub code source:

```shell
$ git clone https://github.com/thabala-cloud/thabala-cli.git
$ cd thabala-cli
$ pip install -r requirements.txt -r requirements-dev.txt
$ pip install .
```

To install in editable mode, such as while contributing, use `pip install -e .` instead.
