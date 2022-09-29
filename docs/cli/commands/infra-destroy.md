---
title: Destroy Infrastructure
---

Thabala CLI `destroy` command destroys infrastructure YAML files from the Thabala account.

Example output:

```shell
$ thabala destroy -f thabala.yaml
[2022-09-29 14:38:37,512] {infra_code.py:50} INFO - Destroying service instance... (superset: analysts)
[2022-09-29 14:38:37,513] {infra_code.py:54} INFO - Querying service instance ID...
[2022-09-29 14:38:37,587] {infra_code.py:72} INFO - Destroying service instance i-5dqcmhe8g5yzebwj7x2o8p
[2022-09-29 14:38:37,587] {api_client.py:224} INFO - Requesting service instance to delete...
[2022-09-29 14:38:37,672] {api_client.py:105} INFO - Polling request status... 
[2022-09-29 14:38:40,744] {api_client.py:105} INFO - Polling request status... (requested)
[2022-09-29 14:38:43,831] {api_client.py:105} INFO - Polling request status... (inprogress)
[
    {
        "result": {
            "action": "delete",
            "error": null,
            "extra": null,
            "id": "389",
            "requested_at": "2022-09-29T12:38:37.662169+00:00",
            "requested_by": "alice@example.com",
            "service_id": "superset",
            "service_instance_id": "i-5dqcmhe8g5yzebwj7x2o8p",
            "state": "completed"
        }
    }
]
$
```
