---
title: Creating an Airflow instance
hide_title: true
---

# Creating an Airflow instance

To create a new Airflow instance, go to **Services -> Airflow** in the menu and click the
**+ CREATE AIRFLOW INSTANCE** button.

![Create Airflow Instance Form](./assets/create-airflow-instance.png)

Airflow instance details:
* **Name**: Anything meaningful
* **Size**: It's recommended to start with **Extra Small** and scale up gradually when you need more resources.
* **Git Repository**: Airflow DAGs are automatically loaded from a git repository. Each airflow instance needs
to be associated with a public or private git repo where the DAGs are under version control.
The standard workflow is that DAG developers are pushing changes into the git repo and the Airflow instance is
continuously checking the state of the same repo. Airflow is automatically refreshing the DAGs when a change
is detected in the git repo.
  * **Git Repo**: HTTPs or SSH URL to the git repository with the Airflow DAGs
  * **SSH Key**: Optional base64 encoded SSH private key to clone private repos
  * **Branch**: Optional git branch to sync to Airflow
  * **Revision**: Optional certain git revision
  * **Sub Path**: Subpath within the repo where the DAGs are located
* **Authenticator**: The authenticator type to authenticate users in the Airflow instance. It
can be the user/password based Local Database Authenticator *(default)* or the more secure and recommended
[OAuth2.0 Authentication](/admin-console/security/oauth2) using one of the supported Identity Providers.
* **Environment Variables**: To change the default internal behaviour of the airflow instance by adding
one or more supported Airflow environment variables

Once the form is submitted, a new Airflow instance with an admin user will start being set up and shortly is
ready to use. Adding more users to the running Airflow instance and granting permissions are controlled via
Thabala and detailed further in the next sections.

## Configure OAuth2.0 Authenticators

Similar to [Thabala Admin Console Authentication Types](/admin-console/security/authentication-types),
Airflow instances can use multiple authenticion types, including the user/password based Local Database Authenticator
*(default)* and the more secure and recommended [OAuth2.0 Authentication](/admin-console/security/oauth2) with
one of the supported Identity Providers. Airflow instances support the following Identity Providers:
* [GitHub](/admin-console/security/oauth2-github)
* [Google](/admin-console/security/oauth2-google)
* [Okta](/admin-console/security/oauth2-okta).

Configuring OAuth2 for Airflow instances using one of the supported Identity Providers is similar to configuring
OAuth2 for the Thabala Admin Console. For further info please check the links above. The only difference is that
you need to create a unique OAuth app for each Airflow instance and register unique
**Callback URL**, **Client ID** and **Client Secret**.

The **OAuth Callback URL** is generated if OAuth2 is configured for the Airflow instance.
You need to define it in the OAuth app  in your Identity Provider *(GitHub, Google, Okta)*.

![Create Airflow Instance Form](./assets/oauth-callback-url.png)

:::info

**OAuth2 details need to be unique** for each service instance. You can't use the same OAuth details across
multiple Airflow or other service instances. It also needs to be different from the one used for the
Thabala Admin Console.

:::

### Extra options for OAuth2 authenticators:
* **Allowlist**: List of authenticated email patterns who are allowed to login. **Empty list means no pattern
so every authenticated user by the IdP is allowed to login** *(default)*.

## Initial secrets

Initial secrets including the Airflow admin username and password to login at the first time. The admin user
is the same user that was used to create the new instance and the password is a random string which is
unique to each service instance.

:::caution

Initial secrets (like admin login credentials) are available to download but **you can get them only once**.
Once it has been downloaded, you will no longer be able to download it again.

:::

The link to the initial secrets is available in the properties tab of the new service instance:

![Airflow Initial Secrets Link](./assets/initial-secrets-link.png)

Once the secrets displayed you'll no longer be able to download it again. You are responsible to keep
it in a safe place:

![Airflow Initial Secrets](./assets/initial-secrets.png)

:::tip

* If you're using the user/password based Local Database Authenticator then changing the
password at the first login is strongly recommended.
* If you're using OAuth2 authenticator then **the admin user is authenticated by
the external Identity Provider and the generated password is not relevant**.
In this case it's safe to ignore the generated password.

:::

## Allocate users to Airflow instance

Managing users is centralised in Thabala. You need to create users in Thabala and associate them to certain services.
This allows you to use the same user across the [Thabala Admin Console](/admin-console/overview),
the Thabala APIs, the [Thabala CLI](/cli) and other managed service instances.

To create users please check the [Managing Users](/admin-console/managing-users) section.
To allocate an existing user to an airflow instance


![Manager Airflow Users](./assets/manage-users.png)

#### Service Roles

Available service roles are the same as provided by the Airflow default settings.
For full descriptions and list of permissions please check the [Airflow Access Control Documentation](https://airflow.apache.org/docs/apache-airflow/stable/security/access-control.html).
Airflow Services Roles that can be given to users:

* **Admin**: All possible permissions
* **Viewer**: Limited viewer permissions
* **User**: `Viewer` permissions plus additional user permissions 
* **Op**: `User` permissions plus additional op permissions
* **Public**: No permissions

:::caution

* **Service Roles are different than the Thabala [Built-in Permissions and Roles](/admin-console/security/roles-and-permissions)**.
Service roles are related to the running Airflow instance and Thabala roles related to the Thabala Platform.
* **Service Instance Admins** can edit or scale the actual airflow instance but not allowed to modify other service instances or other
Thabala settings.
* **Custom Airflow Roles** are not supported

:::

## Configuring Airflow instance in the Thabala CLI

Optionally you can configure all Airflow instances as YAML using the `ServiceInstance` kind and can apply it by the [Thabala CLI](/cli).

```yaml
kind: ServiceInstance
instance:
  service_id: airflow
  name: analysts
  size: xsmall
  extra:
    description: null
    auth:
      authenticator: db
      oauth2: ~
      authenticated_users:
        allowlist: []
users:
- name: alice@foo.com
  admin: true
  service_roles:
  - Admin
```
