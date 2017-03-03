# smartipc
smart subprocess handling

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartipc)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartipc)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartipc)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartipc/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smartipc/badges/master/build.svg)](https://GitLab.com/pushrocks/smartipc/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartipc/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartipc/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartipc.svg)](https://www.npmjs.com/package/smartipc)
[![Dependency Status](https://david-dm.org/pushrocks/smartipc.svg)](https://david-dm.org/pushrocks/smartipc)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartipc/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartipc/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartipc/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartipc)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

### Understand the Purpose
smartipc makes it easy to spawn tasks into subprocesses without loosing control over what those processes do.
You can transparently call functions and expect returned data using promises.

### How To

**Master.ts:**

```javascript
import * as smartipc from 'smartipc'
smartipc.setBasePathArg(__dirname) // if you want to avoid typings out full paths every time

let myThread = new smartipc.Thread('worker')
myThread.send('someMessageOrObject').then(messageResponse => {
    console.log(messageResponse)
})
```

**worker.ts**

```javascript

```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
