---
title: Introduction
hide_title: true
---

## What is Thabala?

Thabala is a platform to run fully managed analytics services. It's focusing on simplicity
to save DevOps time and resources of building and running software platforms
that run at a scale. Using the Thabala Platform to run analytical services
you are not responsible to build the backend cloud infrastructure, and no need to worry about
DevOps tasks like monitoring, alerting, patching, creating backups, updating services
to latest versions, scaling the instances as so on.

## Architecture

![Architecture](./assets/architecture.svg)

### Client facing components:
* **[Admin Console](/admin-console/overview)**: Web interface to manage and monitor your infrastructure.
* **[Command Line Interface](/cli)**: To manage your infrastructure programmatically in YAML files as [Infrastructure as Code](/admin-console/iac.md).
* **[Service Instances](/services)**: The actual managed service instances to support multiple environments (dev, prod) or multiple teams (analysts, finance, etc.)

### Operational tasks provided by the Thabala platform:
* **Logs**: To see what's happening in the service instances
* **Metrics**: To monitor hardware resources *(CPU, RAM)*, to know if it's a time to scale up or down the service instance 
* **Alerts**: *(in review)* To get notified if hardware resources *(CPU, RAM)* is running out of capacity and if it's time to scale up the service instance
* **Backups**: To make sure your data is in safe and always in a recoverable state
* **Upgrades**: To make sure you always can use the most recent versions of your services including the latest features and bugfixes
* **Patching**: To make sure your service instances are safe to use and all the security patches and vulnerabilities are eliminated
* **Scaling**: T-shirt size service instances that makes extremely simple to scale up/down or in/out when you need less or more hardware resources
* **Backend Databases Maintenance**: Rightsized and backed up backend databases for the service instances
* **Cloud Infrastructure**: To spend your time on using the services and not on building the cloud infrastructure
