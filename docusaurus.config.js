// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My DevSite',
  tagline: `"It's the true power of habits, small changes, big rewards."`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: ' https://leo-zubiri.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Leo-Zubiri', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Leo-Zubiri/my-website/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Leo-Zubiri/my-website/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My DevSite',
        logo: {
          alt: 'My Site Logo',
          src: 'img/code.svg',
        },
        items: [
          {
            to: '/portfolio',
            label: 'Portfolio',
            position: 'left'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/notes',
            label: 'My Notes',
            position: 'left'
          },
          {
            href: 'https://github.com/Leo-Zubiri',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/',
              },
            ],
          },
          {
            title: 'Contact me',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/leo-zubiri',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Leo-Zubiri',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/21243070/leo-zubiri',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - My Devsite By Leo Zubiri`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/vsDark'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
        additionalLanguages: ['php','php-extras'],
      },

      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),

    plugins: [
      require.resolve("docusaurus-plugin-image-zoom"),
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        
        ({
          // ... Your options.
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          // For Docs using Chinese, The `language` is recommended to set to:
          // ```
          // language: ["en", "zh"],
          // ```
        }),
      ],
    ],
};

module.exports = config;
