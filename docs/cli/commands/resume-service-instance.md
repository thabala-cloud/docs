---
title: Resume Service Instance
---

Thabala CLI `service-instance resume` resuming a paused service instance.

**Mandatory arguments**:

* `--service-instance-id <id>`: Service Instance ID to pause

**Optional arguments**:

* `--profile <profile>`: Use a specific thabala profile

Example output:

```shell
$ thabala service-instance resume --service-instance-id i-gzomwk6iagiwe4wluujfha
[2022-09-26 11:49:45,373] {api_client.py:196} INFO - Requesting service instance to resume...
[2022-09-26 11:49:45,449] {api_client.py:105} INFO - Polling request status... 
[2022-09-26 11:49:48,529] {api_client.py:105} INFO - Polling request status... (requested)
[2022-09-26 11:49:51,631] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-26 11:49:54,724] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-26 11:49:57,811] {api_client.py:105} INFO - Polling request status... (inprogress)
{
    "result": {
        "action": "resume",
        "error": null,
        "extra": null,
        "id": "62",
        "requested_at": "2022-09-26T09:49:45.442019+00:00",
        "requested_by": "alice@example.com",
        "service_id": "airflow",
        "service_instance_id": "i-gzomwk6iagiwe4wluujfha",
        "state": "completed"
    }
}
```

:::info

To create a new or to stop/delete an existing service instance you need to `apply` a relevant
infrastructure YAML.

See further details in [Apply Infrastructure](apply-infra.md) section.

:::