# Docusaurus

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Create and run project

```npx create-docusaurus@latest my-website classic```

```bash
cd my-website
npm run start
```

## Build project

```npm run build```

> Contents will be generated within the `/build` directory, which can be copied to any static file hosting service like GitHub pages, Vercel or Netlify.

## Classic structure

```
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

## Configuration

All important configuration are setted into `docusaurus.config.js`

The high-level overview of Docusaurus configuration can be categorized into:

- Site metadata
- Deployment configurations
- Theme, plugin, and preset configurations
- Custom configurations

### Accessing configuration from React

Your configuration object will be made available to all the components of your site. And you may access them via React context as `siteConfig`.

```jsx
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Hello = () => {
  const {siteConfig} = useDocusaurusContext();
  const {title, tagline} = siteConfig;

  return <div>{`${title} · ${tagline}`}</div>;
};
```

## Docusaurus Guides

[`Visit Docusaurus guides documentation`](https://docusaurus.io/docs/category/guides)

- Pages
- Docs
- Blog
- Markdown features
- Styling and layout
- Swizzling
- Static assets
- Search
- Browser support
- SEO
- Using Plugins
- Deployment
- Internationalization

---

# Creating my notes

1. Add an option into the navbar from `docusaurus.config.js`:

```js
navbar: {
  title: 'My Site',
  items: [
    ...
    {to: '/blog', label: 'Blog', position: 'left'},
    {
      to: '/notes',
      label: 'My Notes',
      position: 'left'
    },
    {
    }
```

2. Create `Notes.jsx` component into `src/pages/`.

3. create `content.config.js` into `/docs/`:

```jsx
export const topics = [
    {
        name: 'Laravel',
        img: '',
        path: ''
    },
    {
        name: 'React',
        img: '',
        path: ''
    },
];

```

---

# Search

```npm install --save @easyops-cn/docusaurus-search-local```


Add this plugin to the plugins array in docusaurus.config.js.

```js
plugins: [
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
```


> Search does not work in development (i.e., when running `npm run docusaurus start`). If you want to test search locally, first build the documentation with `npm run docusaurus build`, and then serve it via `npm run docusaurus serve`

https://github.com/easyops-cn/docusaurus-search-local


# Image Zoom

```npm install docusaurus-plugin-image-zoom --save```


Configuration

```js
{
  plugins: [require.resolve("docusaurus-plugin-image-zoom")];
}
```

Options

```js
themeConfig: {
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
  },
```


# Deployment

```bash
cmd /C "set GIT_USER=my-user && npm run deploy"
```

---

# Customize any original theme component

```npm run swizzle```