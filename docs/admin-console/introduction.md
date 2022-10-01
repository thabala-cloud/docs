---
title: Introduction
---

Thabala is a platform to run managed analytics services. It's focusing on simplicity
and to save DevOps time and resources of building and maintaining software platforms to run
at a scale.

Monitoring, alerting, patching, creating backups, updating services to latest versions, T-Shirt size scaling
of service instances.

It [Infrastructure as Code](/admin-console/iac.md)

## Architecture

![Architecture](./assets/architecture.svg)

Client facing components:
* **Admin Console**: Web interface to manage and monitor your infrastructure.
* **[Command Line Interface](/cli/overview.md)**: To manage your infrastructure programmatically in YAML files [Infrastructure as Code](/admin-console/iac.md).
* **Service Instances**: One or many managed service instances to support multiple environments (dev, prod) or multiple teams (analysts, finance, etc.)

Operational tasks provided by the Thabala platform:
* **Logs**: 
* **Metrics**:
* **Alerts**: *(in review)*
* **Backups**:
* **Patching**:
* **Upgrades**:
* **Scaling**: 
* **Backend Databases Maintenance**: Rightsizing, backups, restores

:::tip

See the [Services](/services/summary.md) page for the currently available managed services.

:::
