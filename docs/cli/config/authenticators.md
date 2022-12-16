---
title: Thabala CLI Authenticators
---

There are two methods to authenticate the Thabala CLI to the Thabala account:
* [Password Authenticator](#password-authenticator)
* [Browser Based Authenticator](#browser-based-authenticator)

### Password authenticator

Password based authenticator is the default authenticator in the Thabala account and
in Thabala CLI. When using the password authenticator the username and password are
defined in the Thabala CLI config file at `~/.config/thabala/cli.cfg`.


Example `PASSWORD` authenticator:
```ini
[profile password-auth]
account_url = https://console.thabala.com
account_id = thexample001
authenticator = PASSWORD
username = alice@foo.com
password = <password>
```

:::tip

It's strongly recommended to use [OAuth2 over HTTPS](/admin-console/security/oauth2)
[Browser based authenticator](#browser-based-authenticator) to authenticate human users.

:::


### Browser based authenticator

Browser based authenticator is more secure than the Password authenticator and it
needs to be used if the Thabala account is configured with [OAuth2 over HTTPS](/admin-console/security/oauth2) using one of the supported Identity Providers.

Browser based authenticator does not require secrets in the Thabala CLI config. It's opening a
web browser in the where the Thabala CLI is running and ask the user via the browser to
authenticate to the configured Identity Provider. When using the external browser authenticator
the `username` and `password` need to be empty.

Example `EXTERNALBROWSER` authenticator:

```ini
[profile password-auth]
account_url = https://console.thabala.com
account_id = thexample002
authenticator = EXTERNALBROWSER
username = 
password = 
```

:::caution

If using Google or Okta as OAuth2 Identity Provider and want to use Browser Based authenticator
in the Thabala CLI then you need to add a secondary redirect URL to the
Google/Okta admin console: `http://localhost:53442`.

See [Create a Google App](/admin-console/security/oauth2-google#create-an-application-in-google-cloud-platform) and [Create an Okta App](/admin-console/security/oauth2-okta#create-an-okta-app) sections for more details.

:::

:::info

If OAuth2 over HTTPS is the configured
authenticator for your Thabala account then the users have to use the Browser Based Authenticator
and they are not allowed to use the `PASSWORD` authenticator by default.

However, there is a way to configure certain users to be able to login by the
`PASSWORD` authenticator even if the Thabala account is configured to use
[OAuth2 over HTTPS](/admin-console/security/oauth2). This setting is only recommended for service accounts or specific humar users (like account admins) and they can select if they want to use the `PASSWORD` or `EXTERNALBROWSER` authenticator.

For example your Thabala account may be configured to use OAuth over HTTPS, so human users are
forced to be authenticated via an external Identiy Provider using there web browser but some
service accounts with limited permissions can still use the Thabala CLI to login to your account
with user/password programmatically from an automated script.

To allow certain users to login with `PASSWORD` authenticator even if the Thabala account is
using OAuth2 over HTTPS, you need to enable the 
**native authentication with user and password** option for the required users on the
[Managing Users](/admin-console/managing-users#creating-users-in-the-thabala-admin-console) page.

If you're managing users as [Infrastructure as Code](/admin-console/iac) then you need to set
`db_auth_enabled: true` for the required users in the `kind: Users` YAML file.

See an example [here](/admin-console/managing-users#create-service-instance-admins-by-the-thabala-cli).

:::
