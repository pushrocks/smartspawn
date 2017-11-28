import { expect, tap } from 'tapbundle'

import * as smartipc from '../ts/index'

let testThreadFunction: smartipc.ThreadFunction
let testThread: smartipc.Thread
let testPool: smartipc.Pool

/**
 * create a normal ThreadFunction
 */
tap.test('should create an instance of ThreadFunction', async () => {
  testThreadFunction = new smartipc.ThreadFunction((input, done) => {
    let url = require('url')
    done(url.parse(input))
  })
  const message = await testThreadFunction.send('https://google.com')
  console.log(message)
  testThreadFunction.kill()
})

tap.test('should create an instance of Thread', async () => {
  smartipc.setWorkerBasePath(__dirname)
  testThread = new smartipc.Thread('child.js')
  const message = await testThread.send('https://google.com')
  console.log(message)
  testThread.kill()
})

tap.test('should not spawn when nothing is sent', async () => {
  smartipc.setWorkerBasePath(__dirname)
  let testThread = new smartipc.Thread('child.js')
})

tap.test('should run in a Pool', async () => {
  let testPool = new smartipc.Pool()
  let testThread = new smartipc.Thread('child.js')
  testThread.assignToPool(testPool)

  // first run
  let message = await testThread.send('what')
  expect(message).to.equal('what')
  console.log(message)

  // second run
  message = await testThread.send('another')
  expect(message).to.equal('another')
  console.log(message)
  
  // kill all
  testThread.assignedPool.pool.killAll()
})

tap.test('should once', async () => {
  let testThread = new smartipc.Thread('child.js')
  const message = await testThread.sendOnce('what')
  expect(message).to.equal('what')
})

tap.start()
