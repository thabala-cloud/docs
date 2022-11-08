---
title: Get Network Policy
---


Thabala CLI `get network-policy` command gets the network pouser details in your Thabala account.

**Optional arguments**:

* `--limit <number>`: Limit the maximum number of items to return
* `--offset <number>`: Use it with the `limit` argument to specify offset of returned values
* `--profile <profile>`: Use a specific thabala profile

:::info

The `get network-policy` command returns the network policy rules to access
the [Admin Console](/admin-console/overview) and **NOT the network policy
that attached to certain service instances**.
To get the network policy of specific service instances use the
[`get service-instances`](/cli/commands/get-service-instances) or the
[`get infra`](/cli/commands/get-infra) commands.

See more details about the differences in the [Network Policy](/admin-console/security/network-policy) section.

:::

Example output:

```shell
$ thabala get network-policy
{
    "result": [
        {
            "created_at": "2022-11-08T10:38:51.591613+00:00",
            "description": "Allowed local IP range 1",
            "id": 26,
            "ip": "192.168.1.0/24",
            "policy_type": "allowed",
            "updated_at": "2022-11-08T10:43:15.344285+00:00"
        },
        {
            "created_at": "2022-11-08T10:43:45.334193+00:00",
            "description": "Blocked IP in local range 2",
            "id": 30,
            "ip": "192.168.1.99",
            "policy_type": "blocked",
            "updated_at": "2022-11-08T10:43:45.334193+00:00"
        },
        {
            "created_at": "2022-11-08T10:43:01.000984+00:00",
            "description": "Allowed local IP range 2",
            "id": 29,
            "ip": "192.168.2.0/24",
            "policy_type": "allowed",
            "updated_at": "2022-11-08T10:43:01.000984+00:00"
        }
    ],
    "total_entries": 3
}
```

