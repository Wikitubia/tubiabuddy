<div align="center">

<img src="https://github.com/Wikitubia/tubiabuddy/raw/refs/heads/main/src/assets/icons/icon.svg" alt="Logo" width="100"/>

</div>

# <div align="center">TubiaBuddy</div>

<div align="center">

| ![Google Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white) | ![Brave](https://img.shields.io/badge/Brave-FB542B?style=flat-square&logo=Brave&logoColor=white) |
| - | - |

</div>

<div align="center">

![GitHub Issues](https://img.shields.io/github/issues/Wikitubia/tubiabuddy?style=flat-square)
![GitHub Tag](https://img.shields.io/github/v/tag/Wikitubia/tubiabuddy?style=flat-square)
![GitHub License](https://img.shields.io/github/license/Wikitubia/tubiabuddy?style=flat-square)

</div>

**TubiaBuddy** is a utility extension geared for Wikitubia editors, but can work for anyone.

## Compatibility

The extension is confirmed to work with Chrome and Brave, but explicit support for other browsers haven't been implemented. If your browser supports the latest [WebExtensions API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions), and/or aliases the `chrome` namespace into `browser`, you should be able to use this extension without any hitches.

If you encounter any issues that may relate to compatibility, please file an isssue.

## Features

1. Automatic template type detection
2. One-click copy
3. more to be added

## Development

This project uses [Bun](https://bun.sh) as the package manager, script runner, and bundler. It isn't strictly necessary to use Bun while making changes to the repo, but please do know that we use [Bun-exclusive APIs for the build process](/scripts/).

Clone the repository to your device. An environment with Chrome is needed for testing and packaging the extension.

To install dependencies:

```bash
bun install
```

Building a dev output:

```bash
bun run build-dev
```

Building a production output:

```bash
bun run build
```

All build output is put into the `src/out` directory, which is also the directory that the packaged extension will access to do its work.
