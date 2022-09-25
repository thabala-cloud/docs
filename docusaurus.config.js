// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thabala Documentation',
  tagline: 'Hosted analytical services',
  url: 'https://thabala.com',
  baseUrl: '/',
//  baseUrl: '/D:/dev/thabala-docs/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        // hideOnScroll: true,
        logo: {
          alt: 'Thabala Logo',
          src: 'img/thabala-long-turquise.svg',
          href: 'https://thabala.com',
          target: "_self",
        },
        items: [
          {
            to: '/admin-console/introduction',
            label: 'Admin Console',
            position: 'left',
            activeBaseRegex: 'admin-console',
          },
          {
            to: '/cli/overview',
            label: 'Thabala CLI',
            position: 'left',
            activeBaseRegex: 'cli',
          },
          {
            to: '/services/summary',
            label: 'Services',
            position: 'left',
            activeBaseRegex: 'services',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `@${new Date().getFullYear()} Thabala, All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini'],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
    }),

    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocs: true,
          indexBlog: false,
          indexPages: false,

          language: "en",
          style: undefined,
          maxSearchResults: 8,
        },
      ],
      require.resolve('docusaurus-plugin-image-zoom'),
    ],
};

module.exports = config;
