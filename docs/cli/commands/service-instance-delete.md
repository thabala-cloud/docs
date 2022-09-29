---
title: Delete Service Instance
---

Thabala CLI `service-instance delete` deletes a service instance.

**Mandatory arguments**:

* `--service-instance-id <id>`: Service Instance ID to delete

**Optional arguments**:

* `--profile <profile>`: Use a specific thabala profile

Example output:

```shell
$ thabala service-instance delete --service-instance-id i-gzomwk6iagiwe4wluujfha
[2022-09-29 14:46:30,516] {api_client.py:224} INFO - Requesting service instance to delete...
[2022-09-29 14:46:30,606] {api_client.py:105} INFO - Polling request status... 
[2022-09-29 14:46:33,688] {api_client.py:105} INFO - Polling request status... (requested)
{
    "result": {
        "action": "delete",
        "error": null,
        "extra": null,
        "id": "392",
        "requested_at": "2022-09-29T12:46:30.597418+00:00",
        "requested_by": "alice@example.com",
        "service_id": "superset",
        "service_instance_id": "i-7xrqmj8donxmeqpvvnbgza",
        "state": "completed"
    }
}
$
```

:::info

To delete an existing service instance first you need to create one by the `apply` command
using a relevant infrastructure YAML file.

See further details in [Apply Infrastructure](infra-apply.md) section.

:::
