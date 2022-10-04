---
title: Get Health
---

Thabala CLI `get health` command returns information about the generic health of your Thabala account
and its components.

**Optional arguments**:

* `--profile <profile>`: Use a specific thabala profile

Example output:
```shell
$ thabala get health
{
    "details": {
        "database": {
            "status": "ok",
            "version": "Unknown"
        },
        "orchestrator": {
            "status": "ok",
            "version": "1.0.0"
        },
        "webserver": {
            "status": "ok",
            "version": "1.0.0"
        }
    },
    "status": "ok",
    "version": "1.0.0"
}
```
