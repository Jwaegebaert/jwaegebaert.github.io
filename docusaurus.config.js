// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JW',
  titleDelimiter: '-',
  tagline: 'Blog',
  url: 'https://jwaegebaert.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'jwaegebaert.github.io',
  organizationName: 'jwaegebaert',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-Y3K6NBX58L',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          console.log(existingPath);
          if (existingPath.includes('/community')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [
              existingPath.replace('/community', '/docs/team'),
              existingPath.replace('/community', '/docs/support'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'Blog',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'JW blog',
            description: 'Blog articles that are posted on JW',
            copyright: `© ${new Date().getFullYear()} <b>Jasey Waegebaert</b>`,
            language: 'en'
          }
        },
        theme: {
          customCss: require.resolve('./src/styles/Global.module.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml'
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'JW Logo',
          src: 'img/Logo.svg',
          srcDark: 'img/LogoDarkMode.svg',
          style: { padding: '4px' }
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/about-me', label: 'About me', position: 'left' },
          {
            href: 'https://github.com/jwaegebaert',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
