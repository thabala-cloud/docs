---
title: Get Service Instances
---

Thabala CLI `get service-instances` command gets all the active service instances in your Thabala account.

It requests to collect core components of the Thabala account so using this command you can make
sure your Thabala account is working correctly.

Example:
```shell
$ thabala get service-instances
{}
```


Optional arguments:

* `--service-id <id>`: Return only the instances of a specific service
* `--service-instance-id <id>`: Return only a specific service instance
* `--limit <number>`: Limit the maximum number of items to return
* `--offset <number>`: Use it with the `limit` argument to specify offset of returned values
