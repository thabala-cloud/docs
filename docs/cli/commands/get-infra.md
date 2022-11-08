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

Example output of a Thabala account with `Authenticator`, `Users`, `NetworkPolicy` and `ServiceInstance` object kinds:
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
kind: NetworkPolicy
rules:
- ip: 192.168.1.0/24
  policy_type: allowed
  description: Allowed local IP range 1
- ip: 192.168.1.99
  policy_type: blocked
  description: Blocked IP in local range 1
- ip: 192.168.2.0/24
  policy_type: allowed
  description: Allowed local IP range 2

---
kind: ServiceInstance
instance:
  service_id: airflow
  name: analysts
  size: small
  extra:
    description: Airflow instance for Analysts
    gitSync:
      repo: https://github.com/thabala-Cloud/airflow-sandbox-public-dags
      sshKey: null
      branch: null
      rev: null
      subPath: /dags
    auth:
      authenticator: google
      oauth2:
        api_base_url: https://www.googleapis.com/oauth2/v2/
        authorize_url: https://accounts.google.com/o/oauth2/auth
        access_token_url: https://accounts.google.com/o/oauth2/token
        server_metadata_url: https://accounts.google.com/.well-known/openid-configuration
        client_id: <encrypted>
        client_secret: <encrypted>
      authenticated_users:
        allowlist: []
    env: {}
    networkPolicy:
      allowlist:
      - ip: 192.168.1.0/24
      - ip: 192.168.2.100
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

## Sensitive data in infrastructure code

Known sensitive data in the YAML files such as `client_id` and `client_secret` are displayed
as `<encrypted>` for security reasons. These values are not returned by the `get infra` command
and strongly recommended to set these values as [Encrypted Secrets](/admin-console/security/encrypted-secrets).
