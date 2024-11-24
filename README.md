<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/latest/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png">

<h1>Dumi Theme Lobehub</h1>

dumi-theme-lobehub is a documentation site theme package designed for `Dumi 2`. <br/>It provides a more beautiful and user-friendly development and reading experience based on `@lobehub/ui`

[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[Changelog](./CHANGELOG.md) · [Report Bug][github-issues-link] · [Request Feature][github-issues-link]

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🤯 Usage](#-usage)
- [⌨️ Local Development](#️-local-development)
- [🤝 Contributing](#-contributing)
- [🔗 Links](#-links)
  - [More Products](#more-products)

####

</details>

> \[!WARNING]
> Not Support Dumi >= 2.3 yet

## ✨ Features

- [x] 🤯 **Modern Theme Style:** This theme package adopts modern design techniques such as gradient colors, frosted glass, lighting effects, and natural animations to present the interface in a more concise and visually appealing way, making the documents more intuitive, readable, and user-friendly.
- [x] 🌓 **One-click Switch between Light and Dark Theme Mode:** Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options. Users can choose the theme mode according to their preferences and enjoy a good reading experience in different lighting environments.
- [x] 💅 **Based on Ant Design and CSSinJS:** This theme package uses antd as the base component library and implements the style solution using CSSinJS, which helps to better control the style details and improve style reusability and maintainability. The underlying antd-style library provides more flexibility, readability, and ease of maintenance in writing styles.
- [x] 🪄 **Exquisite Syntax Highlighting:** This theme package provides accurate and beautiful syntax highlighting. It utilizes modern syntax highlighting libraries like Shiki and Prism, and offers a rich set of code highlighting schemes to enhance code readability.
- [x] 🧩 **Flexible Component Reusability:** This theme package provides high flexibility for customizing local themes. It exports premium components from the theme package, which can be reused as independent modules. Developers can freely combine and use these components in the dumi local theme package.
- [x] 📱 **Well-Adapted for Mobile Devices:** This theme package is well-adapted for mobile devices. With the flexible style solution based on CSSinJS, multiple layout options are easily implemented. Users can enjoy a consistent and smooth experience across different devices.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📦 Installation

To install `dumi-theme-lobehub`, run the following command:

[![][bun-shield]][bun-link]

```bash
$ bun add dumi dumi-theme-lobehub
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

Usage After installation, start the site with `dumi`, and the theme will be automatically loaded for use.

```ts
interface SiteThemeConfig {
  actions?: HeroProps['actions'];
  analytics?: {
    clarity?: {
      projectId: string;
    };
    googleAnalytics?: {
      measurementId: string;
    };
    plausible?: {
      domain: string;
      scriptBaseUrl: string;
    };
  };
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  docStyle?: 'block' | 'pure';
  features?: FeaturesProps['items'];
  footer?: string | false;
  footerConfig?: FooterConfig;
  giscus?: {
    category: string;
    categoryId: string;
    repo: `${string}/${string}`;
    repoId: string;
  };
  hero?: HeroConfig | Record<string, HeroConfig>;
  hideHomeNav?: boolean;
  logo?: string;
  logoType?: LogoProps['type'];
  metadata?: {
    description?: string;
    icons?: {
      apple?: string;
      icon?: string;
      shortcut?: string;
    };
    manifest?: string;
    openGraph?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
    };
    title?: string;
    twitter?: {
      description?: string;
      image?: string;
      site?: string;
      title?: string;
    };
  };
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}
```

> \[!NOTE]\
> For detailed configuration, please refer to the [📘 Type file](https://github.com/lobehub/dumi-theme-lobehub/blob/master/src/types/config.ts) / [📘 Example](https://github.com/lobehub/dumi-theme-lobehub/blob/master/example/.dumirc.ts).

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Github Codespaces for online development:

[![][github-codespace-shield]][github-codespace-link]

Or clone it for local development:

```bash
$ git clone https://github.com/lobehub/dumi-theme-lobehub.git
$ cd dumi-theme-lobehub
$ bun install
$ bun dev
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing code, feel free to check out our GitHub [Issues][github-issues-link] to get stuck in to show us what you’re made of.

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

### More Products

- **[🍭 Lobe UI](https://github.com/lobehub/lobe-ui)** - An open-source UI component library for building AIGC web apps.
- **[🤖 Lobe Chat](https://github.com/lobehub/lobe-chat)** - An open-source, extensible (Function Calling), high-performance chatbot framework. It supports one-click free deployment of your private ChatGPT/LLM web application.
- **[🤯 Lobe Theme](https://github.com/lobehub/sd-webui-lobe-theme)** - The modern theme for stable diffusion webui, exquisite interface design, highly customizable UI, and efficiency boosting features.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-link]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/lobehub/dumi-theme-lobehub/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/dumi-theme-lobehub/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/dumi-theme-lobehub/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/dumi-theme-lobehub/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/dumi-theme-lobehub
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/dumi-theme-lobehub/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Fdumi-theme-lobehub
[github-contributors-link]: https://github.com/lobehub/dumi-theme-lobehub/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/dumi-theme-lobehub?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/dumi-theme-lobehub/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/dumi-theme-lobehub?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/dumi-theme-lobehub/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/dumi-theme-lobehub?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/dumi-theme-lobehub/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/dumi-theme-lobehub?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/dumi-theme-lobehub/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/dumi-theme-lobehub?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/dumi-theme-lobehub/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/dumi-theme-lobehub?color=ffcb47&labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@lobehub/chat
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/chat?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/dumi-theme-lobehub/pulls
[pr-welcome-shield]: https://img.shields.io/badge/%F0%9F%A4%AF%20PR%20WELCOME-%E2%86%92-ffcb47?labelColor=black&style=for-the-badge
[profile-link]: https://github.com/lobehub
