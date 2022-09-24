/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "docs": [
    "admin-console/introduction",
      "admin-console/architecture",
      {
        type: "category",
        label: "Security",
        items: [
          "admin-console/security/authentication-types",
          "admin-console/security/internal-thabala-authenticator",
          {
            type: "category",
            label: "OAuth2",
            items: [
              "admin-console/security/oauth2",
              "admin-console/security/oauth2-github",
              "admin-console/security/oauth2-google",
              "admin-console/security/oauth2-okta",
              "admin-console/security/oauth2-extras",    
            ]
          },
          "admin-console/security/roles-and-permissions",
        ],
      },
      "admin-console/managing-users",
      "admin-console/spinning-up-services",
      "admin-console/iaac",
      "admin-console/metrics",
  ],
  "Thabala CLI": [
    "cli/overview",
    {
      type: "category",
      label: "Installation",
      items: [
        "cli/install/overview",
        "cli/install/pip",
        "cli/install/from-source",
      ],
    },
    "cli/configuring-your-profile",
    {
      type: "category",
      label: "Commands",
      items: [
        "cli/commands/apply-infra",
        "cli/commands/get-health",
        "cli/commands/get-infra",
        "cli/commands/get-service-instances",
        "cli/commands/get-service-instance-users",
        "cli/commands/get-users",
        "cli/commands/pause-service-instance",
        "cli/commands/resume-service-instance",
      ],
    },
  ],
  "Thabala Services": [
    "services/summary",
    {
      type: "category",
      label: "Airflow",
      items: [
        "services/airflow/about",
        "services/airflow/creating-instance",
      ],
    },
    {
      type: "category",
      label: "Superset",
      items: [
        "services/superset/about",
        "services/superset/creating-instance",
      ],
    },
  ],
};

module.exports = sidebars;
