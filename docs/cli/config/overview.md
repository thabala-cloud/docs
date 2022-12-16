---
title: Configuration basics
---

Thabala config file is located at `~/.config/thabala/cli.cfg` and is generated automatically
at the very first time of running a thabala command, including `thabala version` that we
used at the end of the installation to [validate the installation](/cli/install/pip#validate-installation).

The automatically generated default config at `~/.config/thabala/cli.cfg`:

```ini
[core]
default_timezone = utc

[default]
account_url = https://console.thabala.com
account_id =
authenticator = 
username = 
password = 
```

The default config is not usable out of the box. You need to edit the config parameters
to make it work and to connect to your Thabala account.

### Profiles

Thabala CLI config file is organised into collection of settings and a collection of settings
is called a profile.

By default, the Thabala CLI uses the `default` profile but you can create and use additional
[named profiles](named-profiles.md) with varying credentials and settings by specifying
the `--profile` option and assigning a name. This allows you to connect to multiple Thabala
accounts or to the same account but as multiple users or multiple authentication methods.


Example `~/.config/thabala/cli.cfg` with two profiles:
```ini
[core]
default_timezone = utc

; User/Password based authenticator
[default]
account_url = https://console.thabala.com
account_id = thexample001
authenticator = PASSWORD
username = alice@foo.com
password = <password>


; Passwordless profile with browser based OAuth authenticator
[profile user1]
account_url = https://console.thabala.com
account_id = thexample002
authenticator = EXTERNALBROWSER
username = 
password = 
```

You can then specify a `--profile` profilename with all CLI commands and use the
credentials and settings stored under that name.

Example to get all services instances in the Thabala account behind `user1` profile:

```shell
$ thabala get service-instances --profile user1
```

