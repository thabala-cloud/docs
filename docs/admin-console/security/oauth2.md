---
title: OAuth2 over HTTPS
---

The Thabala Admin Console and all the supported services running in Thabala can be configured to enable OAuth 2.0 authentication over HTTPS
for the Web UI, the API and the Thabala CLI. It uses the [Authorization Code flow](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1)
which exchanges an Authorization Code for a token. At a high level, the flow includes the following steps:

1. the Thabala server or service redirects a user’s browser to the Authorization Server
2. the user authenticates with the Authorization Server, and it approves the Thabala’s permissions request
3. the user’s browser is redirected back to the Thabala coordinator with an authorization code
4. the Thabala server or service exchanges the authorization code for a token

## OAuth 2.0 identity providers

The following identity providers are supported:

* [Github](./oauth2-github)
* [Google](./oauth2-google)
* [Okta](./oauth2-okta)
