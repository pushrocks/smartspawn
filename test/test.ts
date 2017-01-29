import 'typings-test'

import * as smartipc from '../dist/index'

let testThreadFunction: smartipc.ThreadFunction
let testThread: smartipc.Thread
let testPool: smartipc.Pool

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

    it('should not spawn when nothing is sent',function(){
        smartipc.setWorkerBasePath(__dirname)
        let testThread = new smartipc.Thread('child.js')
    })

    it('should run in a Pool', function() {
        let testPool = new smartipc.Pool()
        let testThread = new smartipc.Thread('child.js')
        testThread.assignToPool(testPool)
        testThread.send('what').then(message => {
            console.log(message)
            testThread.send('another').then(message => {
                console.log(message)
                testThread.assignedPool.pool.killAll()
            })
        })
    })
})
