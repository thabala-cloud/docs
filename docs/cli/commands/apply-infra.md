---
title: Apply Infrastructure
---

Thabala CLI `apply` command applies infrastructure YAML files to the Thabala account.


YAML file can contain ore many infrastructure kinds. The infrastructure kind is an
object type that details specific Thabala objects. Known kinds:
* `Authenticator`: Authenticator descriptor
* `Users`: Thabala account users descriptor with the associated Thabala Built-in Roles
* `ServiceInstance`: Service instance descriptor with Service Instance Users and the associated Service Instance Roles

:::caution

**The infrastructure YAML files are the desired state and *not* a list of commands**
that required to run for the deserved state.

The `apply` command makes a diff of current and desired states and run multiple API commands
automatically to syncs the states from YAML to the Thabala account. So the account state will
be exactly the one that is detailed in the YAML files.

For example if the YAML `Users` kind has less users than the existing ones in the Thabala account
then the extra users will be deleted from the account.

Same logic applies to the `ServiceInstance` kind. Not listed Service Instances will be deleted and
purged, while new Service Instances will be created and started.

:::

```shell
$ thabala apply -f abcd.yaml
```
