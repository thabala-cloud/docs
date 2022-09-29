---
title: Apply Infrastructure
---

Thabala CLI `apply` command applies an infrastructure YAML file to the Thabala account.
The input YAML file can contain one re many infrastructure resource kinds.
The infrastructure resource kind is an object type that details specific Thabala objects.

Known infrastructure kinds:
* [Authenticator](/admin-console/iac#the-authenticator-infrastructure-kind): Authenticator descriptor
* [Users](/admin-console/iac#the-users-infrastructure-kind): Thabala account users descriptor with the associated Thabala Built-in Roles
* [ServiceInstance](/admin-console/iac#the-serviceinstance-infrastructure-kind): Service instance descriptor with Service Instance Users and the associated Service Instance Roles

:::tip

See, the [Infrastructure as Code](/admin/console/iad) section for more details about how to manage
your Thabala infrastructure as code.

:::

**Mandatory arguments**:

* `--file <yaml-file>`: Infrastructure YAML file

**Optional arguments**:

* `--profile <profile>`: Use a specific thabala profile

:::caution

**The infrastructure YAML files are the desired state and *not* a list of commands**
that required to run for the deserved state.

The `apply` command makes a diff of current and desired states and run multiple API commands
automatically to syncs the states from the YAML file to the Thabala account. So the account
state will be exactly the one that is detailed in the YAML files.

For example if the YAML `Users` kind has less users than the existing ones in the Thabala account
then the extra users will be deleted from the account.

Same logic applies to the `ServiceInstance` kind. If the service instance in the YAML file
does not exist then it will be created. If the service instance in the YAML file exists but the
details in the YAML files are not in syncs with the actual details of the existing service instance
then the service instance will be modified.

**IMPORTANT**: The `apply` command does not delete service instances. To delete service instances
use the [destroy](infra-destroy.md) or [service-instance delete](service-instance-delete.md) commands.

:::

Example output:

```shell
$ thabala apply -f thabala.yaml
[2022-09-29 14:39:24,496] {infra_code.py:39} INFO - Applying service instance... (superset: analysts)
[2022-09-29 14:39:24,609] {api_client.py:105} INFO - Polling request status... 
[2022-09-29 14:39:27,698] {api_client.py:105} INFO - Polling request status... (requested)
[2022-09-29 14:39:30,772] {api_client.py:105} INFO - Polling request status... (requested)
[2022-09-29 14:39:33,856] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-29 14:39:36,946] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-29 14:39:40,034] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-29 14:39:43,143] {api_client.py:105} INFO - Polling request status... (inprogress)
[2022-09-29 14:39:46,261] {api_client.py:105} INFO - Polling request status... (inprogress)
[
    {
        "service_instance_id": "i-7xrqmj8donxmeqpvvnbgza",
        "service_instance_request_id": "391",
        "service_instance_users_stats": {
            "created": 1,
            "deleted": 0,
            "updated": 0
        }
    }
]
$
```
