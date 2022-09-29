---
title: Get Service Instances
---

Thabala CLI `get service-instances` command gets the active service instance details in your Thabala account.

**Optional arguments**:

* `--service-id <id>`: Return only the instances of a specific service
* `--service-instance-id <id>`: Return only a specific service instance using a given id
* `--service-instance-name <name>`: Return only a specific service instance using a given name
* `--limit <number>`: Limit the maximum number of items to return
* `--offset <number>`: Use it with the `limit` argument to specify offset of returned values
* `--profile <profile>`: Use a specific thabala profile

Example output of 2 Airflow and 1 Superset instances:
```shell
$ thabala get service-instances
{
    "result": [
        {
            "created_date": "2022-09-25T08:49:36.961311+00:00",
            "extra": "{\"description\": \"Airflow instance for Data Analysts, \"gitSync\": {\"repo\": \"https://github.com/thabala-cloud/airflow-sandbox-public-dags.git\", \"sshKey\": null, \"branch\": null, \"rev\": null, \"subPath\": \"/dags\"}, \"auth\": {\"authenticator\": \"db\", \"oauth2\": {\"api_base_url\": null, \"authorize_url\": null, \"access_token_url\": null, \"server_metadata_url\": null, \"client_id\": null, \"client_secret\": null}, \"authenticated_users\": {\"allowlist\": []}}, \"env\": {}}",
            "id": "i-gzomwk6iagiwe4wluujfha",
            "last_request_id": "112",
            "name": "analysts",
            "requested_action": null,
            "requests_in_progress": 0,
            "service_id": "airflow",
            "size": "xsmall",
            "state": "running"
        },
        {
            "created_date": "2022-09-25T08:49:36.961311+00:00",
            "extra": "{\"description\": \"Airflow instance for Customer Service, \"gitSync\": {\"repo\": \"https://github.com/thabala-cloud/airflow-sandbox-public-dags.git\", \"sshKey\": null, \"branch\": null, \"rev\": null, \"subPath\": \"/dags\"}, \"auth\": {\"authenticator\": \"db\", \"oauth2\": {\"api_base_url\": null, \"authorize_url\": null, \"access_token_url\": null, \"server_metadata_url\": null, \"client_id\": null, \"client_secret\": null}, \"authenticated_users\": {\"allowlist\": []}}, \"env\": {}}",
            "id": "i-qnqnotbkypgyqorrxiafcu",
            "last_request_id": "187",
            "name": "cust_service",
            "requested_action": null,
            "requests_in_progress": 0,
            "service_id": "airflow",
            "size": "small",
            "state": "running"
        },
        {
            "created_date": "2022-09-24T08:40:02.393494+00:00",
            "extra": "{\"description\": \"Superset instance for Data Analysts\", \"auth\": {\"authenticator\": \"google\", \"oauth2\": {\"api_base_url\": \"https://www.googleapis.com/oauth2/v2/\", \"authorize_url\": \"https://accounts.google.com/o/oauth2/auth\", \"access_token_url\": \"https://accounts.google.com/o/oauth2/token\", \"server_metadata_url\": \"https://accounts.google.com/.well-known/openid-configuration\", \"client_id\": \"enc/gAAAAABjMWViOCBpWebpW0PtX7uhFxgaKGsO8rvDBy2Ew3nqBOWdsdLfcGpET_XySg-xtJ-2vxd0LdmdAOI2A1B_Q9j2v_f3tQ==\", \"client_secret\": \"enc/gAAAAABjMWVipdFECBxL7O_CzO5sgIQwUgzORjPrGPGFALIPg4OmOYLm5hN7KYObSHQXVE0JwUzhVB1mwjvYcfwRydpJhkKpIA==\"}, \"authenticated_users\": {\"allowlist\": []}}}",
            "id": "i-fzukxzpr7tlapbzh2ghpyw",
            "last_request_id": "76",
            "name": "analysts",
            "requested_action": null,
            "requests_in_progress": 0,
            "service_id": "superset",
            "size": "xsmall",
            "state": "running"
        },

    ],
    "total_entries": 3
}
```
