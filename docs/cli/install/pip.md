---
title: Use pip to install Thabala CLI
---

Thabala CLI is written in python and you need use `pip` to install Kinesis CLI on Windows, Linox or MacOS.
The `thabala-cli` package works on Python versions:
*  3.7.x and greater
*  3.8.x and greater
*  3.9.x and greater
*  3.10.x and greater
*  3.11.x and greater

:::info

Python can be installed by multiple methods, depending on your operating system and your preferred package manager.
Details of installing python is not part of this documentation but a requirement of running Kinesis CLI.

:::

### Installation

Running `thabala-cli` in **virtual environment is strongly recommended** so create and activate a virtual environment first:
```shell
$ python -m venv venv
$ . ./venv/bin/activate
```


Once you Install thabala-cli by `pip`:
```shell
$ pip install thabala-cli
```

### Upgrading

To upgrade `thabala-cli` to the latest version:
```shell
$ pip install --upgrade thabala-cli
```

### Validate installation

To validate if `thabala-cli` is installed correctly:
```shell
$ thabala version
1.3.0
```
