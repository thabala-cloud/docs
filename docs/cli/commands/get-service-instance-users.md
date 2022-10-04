---
title: Get Service Instance Users
---

Thabala CLI `get service-instance-users` command gets the users service instance associations.

**Optional arguments**:

* `--service-instance-id <id>`: Return users of a specific service instance
* `--username <username>`: Return service instance associations of a specific user
* `--limit <number>`: Limit the maximum number of items to return
* `--offset <number>`: Use it with the `limit` argument to specify offset of returned values
* `--profile <profile>`: Use a specific thabala profile

:::info

* The roles in the output are the Service Instance Roles and not the Thabala Built-in Roles.
See more details in the [Managing Users](/admin-console/managing-users) and 
[Roles and Permissions](/admin-console/security/roles-and-permissions) sections.

:::

Example output:
```shell
$ thabala get service-instance-users
{
    "result": [
        {
            "admin": true,
            "service_instance_id": "i-gzomwk6iagiwe4wluujfha",
            "service_roles": [
                {
                    "name": "Admin"
                }
            ],
            "username": "alice@example.com"
        },
        {
            "admin": false,
            "service_instance_id": "i-gzomwk6iagiwe4wluujfha",
            "service_roles": [
                {
                    "name": "Viewer"
                },
                {
                    "name": "User"
                }
            ],
            "username": "bob@example.com"
        },
        {
            "admin": true,
            "service_instance_id": "i-qnqnotbkypgyqorrxiafcu",
            "service_roles": [
                {
                    "name": "Admin"
                }
            ],
            "username": "alice@example.com"
        },
        {
            "admin": false,
            "service_instance_id": "i-qnqnotbkypgyqorrxiafcu",
            "service_roles": [
                {
                    "name": "Op"
                }
            ],
            "username": "mary@example.com"
        },
        {
            "admin": true,
            "service_instance_id": "i-fzukxzpr7tlapbzh2ghpyw",
            "service_roles": [
                {
                    "name": "Admin"
                }
            ],
            "username": "alice@example.com"
        }
    ],
    "total_entries": 5
```
