<div align="center">

<img src="https://github.com/Wikitubia/tubiabuddy/raw/refs/heads/main/src/assets/icons/icon.svg" alt="logo" width="100"/>

</div>

# <div align="center">TubiaBuddy</div>

<div align="center">

![Google Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white)
![Brave](https://img.shields.io/badge/Brave-FB542B?style=flat-square&logo=Brave&logoColor=white)

</div>

<div align="center">

![GitHub Issues](https://img.shields.io/github/issues/Wikitubia/tubiabuddy?style=flat-square)
![GitHub Tag](https://img.shields.io/github/v/tag/Wikitubia/tubiabuddy?style=flat-square)
![GitHub License](https://img.shields.io/github/license/Wikitubia/tubiabuddy?style=flat-square)

</div>

**TubiaBuddy** is a utility extension geared for Wikitubia editors, but can work for anyone.

Currently it only supports Google Chrome's extension API and manifest, but support for the other three major browsers (Edge, Safari, Firefox) are planned.

## Features

1. Automatic template type detection
2. One-click copy
3. more to be added

## Development

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

All build output is put into the `src/out` directory.
