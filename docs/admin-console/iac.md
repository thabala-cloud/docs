---
title: Infrastructure as Code
---

Thabala allows to manage all services, settings and configuration details in [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
Everything that can be done on the web interface can be done programmatically by using
the Thabala API via the [Thabala Command Line Interface](/cli/overview).

### Infrastructure Code format

All infrastructure details are defined as YAML files and all YAML files are structured in the same way.
The `kind` key is mandatory, but the other keys are specific to certain kinds.

```yaml
kind: <something>
# <...further-service-specific-key-values...>
```

Known infrastructure kinds *(see details and examples by clicking on the links)*:
* [Authenticator](#the-authenticator-infrastructure-kind): Authenticator descriptor
* [Users](#the-users-infrastructure-kind): Thabala account users descriptor with the associated Thabala Built-in Roles
* [ServiceInstance](#the-serviceinstance-infrastructure-kind): Service instance descriptor with Service Instance Users and the associated Service Instance Roles

### Using the infrastructure YAML files

Infrastructure YAML files are typically live in a version control system (for example in [git](https://git-scm.com/)),
where people who want to make infrastructure changes are sending pull requests to these YAML files. Once the pull request
got approved by other authorised persons, it got merged and the changes auto applies to the live Thabala account.
To interact with your Thabala account you need to use the [Thabala Command Line Interface](/cli/overview). (See
installation methods in the [Thabala CLI Installation](http://localhost:3000/cli/install/overview) section).
You can use it locally on your laptop (Windows, Mac, Linux) or in CI/CD pipelines for example in GitHub Actions
to automatically apply the infrastructure changes as early as possible.

Typically you need to use the following Thabala CLI commands when managing your infrastructure as code
*(see details and examples by clicking on the links)*:
* [`get infra`](/cli/commands/get-infra.md): To get the actual infrastructe states as code in YAML format. You can use the output of this as
* [`apply`](/cli/commands/infra-apply.md): To apply infrastructure YAML file(s)
* [`destroy`](/cli/commands/infra-destroy.md): To destroy the infrastructure item(s) that is described in a YAML file.

:::tip

You can create as many YAML file as many infrastructure items you have or you can combine multiple
infrastructure items into the same YAML file whichever fits better to your requirements.

* Sometimes managing infrastrucutre items in multiple files fits better to your requirements.
For example in GitHub you can create [Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
so specific infrastructure items (one infrastructure item per one YAML file) can be approved and merged
by specific staff members. 

* To add multiple infrastucture items into the same YAML file use the standard `---` document separator.
In this case `thabala apply -f single-file.yaml` command will apply all documents in the same YAML
file:

Where the content of `single-file.yaml` is:
```yaml
---
kind: Authenticator
# <...further-key-values...>

---
kind: Users
# <...further-key-values...>

---
kind: ServiceInstance
instance:
  service_id: demo
  name: demo-service-1
  size: xsmall
# <...further-key-values...>

---
kind: ServiceInstance
instance:
  service_id: demo
  name: demo-service-2
  size: medium
# <...further-key-values...>
```

:::

### The `Authenticator` infrastructure kind

The `Authenticator` infrastrucutre kind describe the desired [Authentication Type](/admin-console/security/authentication-types) for
the [Thabala Admin Console](/admin-console/introduction).

:::info

**Important**: The `Authenticator` infrastructure kind describes the method how you want your users to be authenticated
**only to the Thabala Admin Console** and not to the service instances. Eash service instance needs to have their
own authenticator and there are similar sections in each [`ServiceInstance`](#the-serviceinstance-infrastructure-kind)
infrastructure kinds.

:::

Example `Authenticator` infrastructure kind YAML file with OAuth2 and Google as Identity Provider:
```yaml
kind: Authenticator
authenticator:
  authenticator: google
  oauth2:
    remote_app:
      api_base_url: https://www.googleapis.com/oauth2/v2/
      authorize_url: https://accounts.google.com/o/oauth2/auth
      access_token_url: https://accounts.google.com/o/oauth2/token
      server_metadata_url: https://accounts.google.com/.well-known/openid-configuration
      client_id: <client_id>
      client_secret: <client_secret>
    authenticated_users:
      auth_user_registration: false
      auth_user_registration_role: ''
    browser_mode_redirect_port: 53442
```

### The `Users` infrastructure kind

The `Authenticator` infrastrucutre kind describes the users in the Thabala account.
This is the YAML representation of [Managing Users](/admin-console/managing-users).

:::info

* See the [Creating Users in the Thabala Admin Console](/admin-console/managing-users#creating-users-in-the-thabala-admin-console)
section for the meaning of the keys in the YAML. They equivalent to the corresponding options in the Admin Console form.

* see managing users sections.

* **Important**: Setting password in the `Users` infrastructure kind YAML file is not recommended. If you use
[OAuth2 over HTTPS](/admin-console/security/oauth2) then you don't need to set passwords at all because it will be ignored.
If you're using the [Internal Thabala Authenticator](admin-console/security/internal-thabala-authenticator) then
you have two options:
  1. Leave out the `password` field from the YAML. A Thabala admin will set the initial password for the new users in the Admin Console
  and at their first login the new users will change their own passwords in the Admin Console.
  2. Set `password` in the YAML file. It will be applied only when creating users and not when modifying it.
  For example if you change roles of a user then the password will not change even if you delete or change
  the `password` field too in the YAML file.

* **Important**: Please be familiar with [Managing Users](/admin-console/managing-users) in general.
The password and roles that you set in the `Users` YAML are only relevent to the Admin Console and **not to the actual service instances**.

:::

Example `Users` infrastructure kind YAML file with a few users:

```yaml
kind: Users
users:
- username: alice@example.com
  first_name: Alice
  last_name: Example
  email: alice@example.com
  # password: <secret-try-to-avoid-by-using-oauth2>
  roles:
  - name: Admin
  db_auth_enabled: true
- username: bob@example.com
  first_name: Bob
  last_name: Example
  email: bob@example.com
  # password: <secret-try-to-avoid-by-using-oauth2>
  roles:
  - name: Viewer
  db_auth_enabled: false
- username: mary@example.com
  first_name: Mary
  last_name: Example
  email: mary@example.com
  # password: <secret-try-to-avoid-by-using-oauth2>
  roles:
  - name: Public
  db_auth_enabled: false
- username: scott@example.com
  first_name: Scott
  last_name: Example
  email: scott@example.com
  # password: <secret-try-to-avoid-by-using-oauth2>
  roles: []
  db_auth_enabled: false
```

### The `ServiceInstance` infrastructure kind

The `ServiceInstance` infrastrucutre kind describes a certain service instance
([Airflow](/services/airflow/about.md), [Superset](/services/superset/about.md), etc.) in the Thabala account.

:::caution

Each service requires specific key-value pairs in the YAML files so please see the actual service documentation for the
details.

:::

Example `ServiceInstance` infrastructure kind YAML file with a [Superset](/services/superset/about.md) service instance:

```yaml
kind: ServiceInstance
instance:
  service_id: superset
  name: marketing
  size: xsmall
  extra:
    description: Superset instance for the marketing team
    auth:
      authenticator: db
      oauth2:
        api_base_url: https://www.googleapis.com/oauth2/v2/
        authorize_url: https://accounts.google.com/o/oauth2/auth
        access_token_url: https://accounts.google.com/o/oauth2/token
        server_metadata_url: https://accounts.google.com/.well-known/openid-configuration
        client_id: <client_id>
        client_secret: <client_secret>
      authenticated_users:
        allowlist: []
users:
- username: alice@example.com
  admin: true
  service_roles:
  - name: Admin
  - name: Gamma
```
