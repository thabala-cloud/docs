---
title: Named Profiles
---

A named profile is a collection of settings and credentials that you can apply to a Thabala CLI command.
When you specify a profile to run a command, the settings and credentials are used to run that command.
Multiple named profiles can be stored in the config file.

You can specify one `default` profile that is used when no profile is explicitly referenced.
Other profiles have names that you can specify as a parameter on the command line for individual command.


### Creating named profiles

You can configure additional profiles by adding entries to the `~/.config/thabala/cli.cfg` file.
The following example shows a credentials file with two profiles:

```ini
[core]
default_timezone = utc

; User/Password based authenticator
[default]
account_url = https://thexample001.thabala.com
authenticator = PASSWORD
username = alice@foo.com
password = <password>


; Passwordless profile with browser based OAuth authenticator
[profile user1]
account_url = https://thexample002.thabala.com
authenticator = EXTERNALBROWSER
username = 
password = 
```

Each profile can specify different credentials and can also specify different Thabala Accounts
and authenticators. When naming the profile in a config file, include the prefix word `profile`.

### Using named profiles

To use a named profile, add the `--profile <profile-name>` option to your command. The following
example lists all of your Thabala service isntances using the credentials and settings defined
in the `user1` profile from the previous example files.

```shell
$ thabala get service-instances --profile user1
```