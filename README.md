<a name="readme-top"></a>

<div align="center">

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png">

<h1>Dumi Theme Lobehub</h1>

dumi-theme-lobehub is a documentation site theme package designed for `Dumi 2`. <br/>It provides a more beautiful and user-friendly development and reading experience based on `@lobehub/ui`

[Changelog](./CHANGELOG.md) · [Report Bug][issues-url] · [Request Feature][issues-url]

<!-- SHIELD GROUP -->

[![release][release-shield]][release-url]
[![releaseDate][release-date-shield]][release-date-url]
[![ciTest][ci-test-shield]][ci-test-url]
[![ciRelease][ci-release-shield]][ci-release-url] <br/>
[![contributors][contributors-shield]][contributors-url]
[![forks][forks-shield]][forks-url]
[![stargazers][stargazers-shield]][stargazers-url]
[![issues][issues-shield]][issues-url]

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

####

</details>

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

Quick Start Installation It is recommended to use `pnpm` for installation:

```bash
pnpm add dumi-theme-lobehub -D
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤯 Usage

Usage After installation, start the site with `dumi`, and the theme will be automatically loaded for use.

```ts
interface SiteThemeConfig {
  actions: HeroProps['actions'];
  apiHeader?: ApiHeaderConfig | false;
  description?: string;
  features: FeaturesProps['items'];
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
  name?: string;
  siteToken?: SiteConfigToken;
  socialLinks?: {
    discord?: `https://discord.gg/${string}`;
    github?: string;
  };
  title?: string;
}
```

> 👉 Tip: For detailed configuration, please refer to the [Type file](https://github.com/lobehub/dumi-theme-lobehub/blob/master/src/types/config.ts) | [Example](https://github.com/lobehub/dumi-theme-lobehub/blob/master/example/.dumirc.ts).

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ Local Development

You can use Gitpod for online development:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)][gitpod-url]

Or clone it for local development:

```bash
$ git clone https://github.com/lobehub/dumi-theme-lobehub.git
$ cd dumi-theme-lobehub
$ pnpm install
$ pnpm start
```

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

<!-- CONTRIBUTION GROUP -->

> 📊 Total: <kbd>**4**</kbd>

<a href="https://github.com/canisminor1990" title="canisminor1990">
  <img src="https://avatars.githubusercontent.com/u/17870709?v=4" width="50" />
</a>
<a href="https://github.com/actions-user" title="actions-user">
  <img src="https://avatars.githubusercontent.com/u/65916846?v=4" width="50" />
</a>
<a href="https://github.com/arvinxx" title="arvinxx">
  <img src="https://avatars.githubusercontent.com/u/28616219?v=4" width="50" />
</a>
<a href="https://github.com/apps/dependabot" title="dependabot[bot]">
  <img src="https://avatars.githubusercontent.com/in/29110?v=4" width="50" />
</a>

<!-- CONTRIBUTION END -->

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[profile-url]: https://github.com/lobehub
[gitpod-url]: https://gitpod.io/#https://github.com/lobehub/dumi-theme-lobehub

<!-- SHIELD LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

<!-- release -->

[release-shield]: https://img.shields.io/npm/v/dumi-theme-lobehub?label=%F0%9F%A4%AF%20NPM
[release-url]: https://www.npmjs.com/package/dumi-theme-lobehub

<!-- releaseDate -->

[release-date-shield]: https://img.shields.io/github/release-date/lobehub/dumi-theme-lobehub?style=flat
[release-date-url]: https://github.com/lobehub/dumi-theme-lobehub/releases

<!-- ciTest -->

[ci-test-shield]: https://github.com/lobehub/dumi-theme-lobehub/workflows/Test%20CI/badge.svg
[ci-test-url]: https://github.com/lobehub/dumi-theme-lobehub/actions?query=workflow%3ATest%20CI

<!-- ciRelease -->

[ci-release-shield]: https://github.com/lobehub/dumi-theme-lobehub/workflows/Release%20CI/badge.svg
[ci-release-url]: https://github.com/lobehub/dumi-theme-lobehub/actions?query=workflow%3ARelease%20CI

<!-- contributors -->

[contributors-shield]: https://img.shields.io/github/contributors/lobehub/dumi-theme-lobehub.svg?style=flat
[contributors-url]: https://github.com/lobehub/dumi-theme-lobehub/graphs/contributors

<!-- forks -->

[forks-shield]: https://img.shields.io/github/forks/lobehub/dumi-theme-lobehub.svg?style=flat
[forks-url]: https://github.com/lobehub/dumi-theme-lobehub/network/members

<!-- stargazers -->

[stargazers-shield]: https://img.shields.io/github/stars/lobehub/dumi-theme-lobehub.svg?style=flat
[stargazers-url]: https://github.com/lobehub/dumi-theme-lobehub/stargazers

<!-- issues -->

[issues-shield]: https://img.shields.io/github/issues/lobehub/dumi-theme-lobehub.svg?style=flat
[issues-url]: https://github.com/lobehub/dumi-theme-lobehub/issues/new/choose
