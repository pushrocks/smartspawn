import 'typings-test'

import * as smartipc from '../dist/index'

let testThreadFunction: smartipc.ThreadFunction
let testThread: smartipc.Thread

describe('smartipc',function(){
    it('should create an instance of ThreadFunction',function(){
        testThreadFunction = new smartipc.ThreadFunction((input, done) => {
            let url = require('url')
            done(url.parse(input))
        })
        testThreadFunction.send('https://google.com').then(message => {
            console.log(message)
            testThreadFunction.kill()
        })
    })
    it('should create an instance of Thread',function(){
        smartipc.setWorkerBasePath(__dirname)
        testThread = new smartipc.Thread('child.js')
        testThread.send('https://google.com').then(message => {
            console.log(message)
            testThread.kill()
        })
    })
})
