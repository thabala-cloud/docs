---
title: Get Infrastructure
---

Thabala CLI `get infra` command returns resource objects in the Thabala account at the current
state in YAML format. This YAML file(s) can be used as the starting point to manage a Thabala
account as a code.

See further details in the [Infrastructure as Code](/admin-console/iac) section.

**Optional arguments**:

* `--kind <kind>`: Return only object of a specific infrastructe `kind`.
* `--profile <profile>`: Use a specific thabala profile

:::tip

The best practise is to maintain your Thabala account as a code instead of making changes manually in
the admin console web interface. To achieve that you need to keep the infrastructure YAML file(s) in
a version control system, make changes by pull requests and apply the changes automatically by
the `thabala apply` command.

See further in [Apply Infra Command](infra-apply.md) and [Infrastructure as Code](/admin-console/iac) sections.

:::

Example output of a Thabala account with `Authenticator`, `Users` and `ServiceInstance` object kinds:
```yaml
$ thabala get infra
---
kind: Authenticator
authenticator:
  authenticator: db
  oauth2: {}

---
kind: Users
users:
- username: alice@example.com
  first_name: Alice
  last_name: Example
  email: alice@example.com
  roles:
  - name: Admin
  db_auth_enabled: true
- username: bob@example.com
  first_name: Bob
  last_name: Example
  email: bob@example.com
  roles:
  - name: Viewer
  db_auth_enabled: false
- username: mary@example.com
  first_name: Mary
  last_name: Example
  email: mary@example.com
  roles:
  - name: Public
  db_auth_enabled: false

---
kind: ServiceInstance
instance:
  service_id: airflow
  name: analysts
  size: xsmall
  extra:
    description: null
    gitSync:
      repo: https://github.com/thabala-cloud/airflow-sandbox-public-dags.git
      sshKey: null
      branch: null
      rev: null
      subPath: /dags
    auth:
      authenticator: db
      oauth2:
        api_base_url: null
        authorize_url: null
        access_token_url: null
        server_metadata_url: null
        client_id: null
        client_secret: null
      authenticated_users:
        allowlist: []
    env: {}
users:
- name: alice@example.com
  admin: true
  service_roles:
  - Admin
- name: bob@example.com
  admin: false
  service_roles:
  - Viewer
  - User
```
