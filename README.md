# @pushrocks/smartspawn
smart subprocess handling

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartspawn)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartspawn)
* [github.com (source mirror)](https://github.com/pushrocks/smartspawn)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartspawn/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartspawn/badges/master/build.svg)](https://gitlab.com/pushrocks/smartspawn/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartspawn/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartspawn/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartspawn.svg)](https://www.npmjs.com/package/@pushrocks/smartspawn)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartspawn/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartspawn)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

### Understand the Purpose

smartipc makes it easy to spawn tasks into subprocesses without loosing control over what those processes do.
You can transparently call functions and expect returned data using promises.

### How To

**Master.ts:**

```javascript
import * as smartspawn from 'smartspawn';
smartspawn.setBasePathArg(__dirname); // if you want to avoid typings out full paths every time

let myThread = new smartspawn.Thread('worker');
myThread.send('someMessageOrObject').then(messageResponse => {
  console.log(messageResponse);
});
```

**worker.ts**

```javascript
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
