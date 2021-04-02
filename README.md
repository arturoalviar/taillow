<h1 align="center">
  <img alt="Taillow hero" title="Taillow hero" src="src/assets/taillow-readme-hero.png" width="320">
  </br>
    Taillow
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/9a617113-01a2-4626-8c1f-60e6efafb186/deploy-status)](https://app.netlify.com/sites/taillow/deploys)

A collection of random components made with [TailwindCSS v2](https://tailwindcss.com/).

### Features

- [x] 30+ component snippets
- [x] Made with pure TailwindCSS
- [x] Responsive
- [x] Export as HTML
- [x] Inline SVG Fontawesome icons
- [x] Themes based off the Tailwind color palette

## Made using:

- Vue 3
- Vuex 4
- TailwindCSS 2
- TypeScript

## Configuration

The majority of components will work with a default TailwindCSS configuration. There are only a few items you need to add to your `tailwind.config.js` file to ensure full compatibility.

### Plugins

First install the plugins

```
yarn add @tailwindcss/aspect-ratio @tailwindcss/forms
```

Then add the plugins to your config file

```javascript
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
```

### Variants

```javascript
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
```

## Running the app

Install packages

```
yarn
```

Then to run the app locally

```
yarn serve
```
