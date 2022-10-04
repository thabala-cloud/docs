---
title: Install Thabala CLI from source
---

Thabala CLI is an open source software. As such, the codebases are freely available to download and build from source. This means that apart from [installing it by pip](pip.md) you might install form source if you want the latest code or want to install `thabala-cli` from a specific commit. This might be helpful when you are contributing changes, or if you want to debug a past change.

To download form source, you would clone the repositories from GitHub, making a local copy, and then install the local version using `pip`.

### Installing Thabala CLI

Running `thabala-cli` in **virtual environment is strongly recommended** so create and activate a virtual environment first:
```shell
$ python -m venv venv
$ . ./venv/bin/activate
```

To install `thabala-cli` from the GitHub code source:

```shell
$ git clone https://github.com/thabala-cloud/thabala-cli.git
$ cd thabala-cli
$ pip install -r requirements.txt -r requirements-dev.txt
$ pip install .
```

To install in editable mode, such as while contributing, use `pip install -e .` instead.

### Validate installation

To validate if `thabala-cli` is installed correctly:
```shell
$ thabala version
1.1.0
```
