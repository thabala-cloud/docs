---
title: Pause Service Instance
---

Thabala CLI `service-instance pause` command pausing a running service instance.

**Mandatory arguments**:

* `--service-instance-id <id>`: Service Instance ID to pause

**Optional arguments**:

* `--profile <profile>`: Use a specific thabala profile

Example output:

```shell
$ thabala service-instance pause --service-instance-id i-gzomwk6iagiwe4wluujfha
[2022-09-26 11:44:19,995] {api_client.py:178} INFO - Requesting service instance to pause...
[2022-09-26 11:44:20,074] {api_client.py:105} INFO - Polling request status... 
[2022-09-26 11:44:23,161] {api_client.py:105} INFO - Polling request status... (requested)
[2022-09-26 11:44:26,287] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-26 11:44:29,843] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-26 11:44:32,183] {api_client.py:105} INFO - Polling request status... (inprogress)
{
    "result": {
        "action": "pause",
        "error": null,
        "extra": null,
        "id": "61",
        "requested_at": "2022-09-26T09:44:20.066168+00:00",
        "requested_by": "alice@example.com",
        "service_id": "airflow",
        "service_instance_id": "i-gzomwk6iagiwe4wluujfha",
        "state": "completed"
    }
```

:::info

To pause an existing service instance first you need to create one using
the `apply` command giving a relevant infrastructure YAML file.

See further details in [Apply Infrastructure](infra-apply.md) section.

:::
