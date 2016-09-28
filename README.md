# smartipc
smart subprocess handling

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartipc)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartipc)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartipc)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartipc/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartipc/badges/master/build.svg)](https://gitlab.com/pushrocks/smartipc/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartipc/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartipc/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartipc.svg)](https://david-dm.org/pushrocks/smartipc)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartipc/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartipc/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartipc/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartipc)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## The purpose
smartipc makes it easy to spawn tasks into subprocesses without loosing control over what those processes do.
You can transparently call functions and expect returned data using promises.

## Usage

Server:
```typescript
import {Ipcserver} from 'smartipc'
import * as q from 'q'

let myIpcserver = new Ipcserver({
    appspace: 'mymodule'
})

// The subprocess js file cannot have any cli arguments
// since this mechanism is used by IpcServer to setup the connection
myIpcServer.spawnProcess('./myFile','mySubProcessNameAlias') // nameAlias identifies the subprocess and will prefix any logs from child Process

let someData = {
    key1: 'value1',
    key2: 'value2'
}

myIpcServer.call('mySubProcessNameAlias','myAwesomeFunction',someData).then(someAnswerData => {
    console.log(someAnswerData.key1)
})

```

Client:
```typescript
import { Ipcclient } from './smartipc'
import * as q from 'q'

let localIpc = new Ipcclient() // gets its connection information automatically using CLI args internally

let myAwesomeFunction = (dataArg) => {
    let done = plugins.q.defer()
    console.log('awesome') // this will log transparently in the same console stream as the host process
    let someAnswerData = {key1: 'this is an answer'}
    done.resolve(someAnswerData)
    return done.promise
}

localIpc.register([myAwesomeFunction])
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
