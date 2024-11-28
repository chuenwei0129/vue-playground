# naifu

[![NPM version](https://img.shields.io/npm/v/naifu.svg?style=flat)](https://npmjs.org/package/naifu)
[![NPM downloads](http://img.shields.io/npm/dm/naifu.svg?style=flat)](https://npmjs.org/package/naifu)

A vue library developed with dumi

## Usage

First, introduce css file:

```ts
import 'naifu/dist/style.css';
```

Then, introduce components:

```html
<script setup lang="ts">
  import { Foo, Bar } from 'naifu';
</script>
```

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# Test
$ pnpm test

# Coverage
$ pnpm test:cov

# Lint
$ pnpm lint
```

## LICENSE

MIT
