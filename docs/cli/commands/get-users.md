---
title: Get Users
---

Thabala CLI `get users` command gets the user details in your Thabala account.

**Optional arguments**:

* `--limit <number>`: Limit the maximum number of items to return
* `--offset <number>`: Use it with the `limit` argument to specify offset of returned values
* `--profile <profile>`: Use a specific thabala profile

:::info

* The `get users` command returns all registered users in the Thabala account regardless which
service instance the users are allocated. To get the users who are allocated and have roles
for a specific service instance use the [get service-instance-users](get-service-instance-users.md)
command.

* The roles in the output are the Thabala Built-in Roles and not service instance roles.
See more details in the [Managing Users](/admin-console/managing-users) and 
[Roles and Permissions](/admin-console/security/roles-and-permissions) sections.

:::


Example output of 3 users:
```shell
$ thabala get users
{
    "result": [
        {
            "active": true,
            "changed_on": "2022-09-18T10:52:54.183742",
            "created_on": "2022-09-18T10:52:54.183742",
            "db_auth_enabled": true,
            "email": "alice@example.com",
            "fail_login_count": 0,
            "first_name": "Alice",
            "last_login": "2022-09-26T10:59:28.139341",
            "last_name": "Example",
            "login_count": 11,
            "roles": [
                {
                    "name": "Admin"
                }
            ],
            "system_user": false,
            "username": "alice@example.com"
        },
        {
            "active": true,
            "changed_on": "2022-09-18T10:53:01.652242",
            "created_on": "2022-09-18T10:53:01.652242",
            "db_auth_enabled": false,
            "email": "bob@example.com",
            "fail_login_count": null,
            "first_name": "Bob",
            "last_login": null,
            "last_name": "Example",
            "login_count": null,
            "roles": [
                {
                    "name": "Viewer"
                }
            ],
            "system_user": false,
            "username": "bob@example.com"
        },
        {
            "active": true,
            "changed_on": "2022-09-18T10:53:09.102242",
            "created_on": "2022-09-18T10:53:09.102242",
            "db_auth_enabled": false,
            "email": "mary@example.com",
            "fail_login_count": null,
            "first_name": "Mary",
            "last_login": null,
            "last_name": "Example",
            "login_count": null,
            "roles": [
                {
                    "name": "Public"
                }
            ],
            "system_user": false,
            "username": "mary@example.com"
        }
    ],
    "total_entries": 3
}
```
