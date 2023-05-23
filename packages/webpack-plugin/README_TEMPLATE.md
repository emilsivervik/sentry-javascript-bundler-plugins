<p align="center">
  <a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
    <img src="https://sentry-brand.storage.googleapis.com/sentry-wordmark-dark-280x84.png" alt="Sentry" width="280" height="84">
  </a>
</p>

# Sentry Webpack Plugin

[![npm version](https://img.shields.io/npm/v/@sentry/webpack-plugin.svg)](https://www.npmjs.com/package/@sentry/webpack-plugin)
[![npm dm](https://img.shields.io/npm/dm/@sentry/webpack-plugin.svg)](https://www.npmjs.com/package/@sentry/webpack-plugin)
[![npm dt](https://img.shields.io/npm/dt/@sentry/webpack-plugin.svg)](https://www.npmjs.com/package/@sentry/webpack-plugin)

> A Webpack plugin that provides source map and release management support for Sentry.

## Installation

Using npm:

```bash
npm install @sentry/webpack-plugin --save-dev
```

Using yarn:

```bash
yarn add @sentry/webpack-plugin --dev
```

Using pnpm:

```bash
pnpm install @sentry/webpack-plugin --dev
```

## Example

```js
// webpack.config.js
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  // ... other config above ...

  devtool: "source-map", // Source map generation must be turned on
  plugins: [
    sentryWebpackPlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,

      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and need `project:releases` and `org:read` scopes
      authToken: process.env.SENTRY_AUTH_TOKEN,

      sourcemaps: {
        // Specify the directory containing build artifacts
        assets: "./**",
        // Don't upload the source maps of dependencies
        ignore: ["./node_modules/**"],
      },

      // Helps troubleshooting - set to false to make plugin less noisy
      debug: true,

      // Use the following option if you're on an SDK version lower than 7.47.0:
      // release: {
      //   uploadLegacySourcemaps: {
      //     include: ".",
      //     ignore: ["node_modules"],
      //   },
      // },

      // Optionally uncomment the line below to override automatic release name detection
      // release: env.RELEASE,
    }),
  ],
};
```

#OPTIONS_SECTION_INSERT#

## More information

- [Sentry Documentation](https://docs.sentry.io/quickstart/)
- [Sentry Discord](https://discord.gg/Ww9hbqr)
- [Sentry Stackoverflow](http://stackoverflow.com/questions/tagged/sentry)