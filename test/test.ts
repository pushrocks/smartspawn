import { expect, tap } from '@pushrocks/tapbundle';

import * as smartspawn from '../ts/index';

let testThreadFunction: smartspawn.ThreadFunction;
let testThread: smartspawn.Thread;
let testPool: smartspawn.Pool;

/**
 * create a normal ThreadFunction
 */
tap.test('should create an instance of ThreadFunction', async () => {
  testThreadFunction = new smartspawn.ThreadFunction((input, done) => {
    let url = require('url');
    done(url.parse(input));
  });
  const message = await testThreadFunction.send('https://google.com');
  console.log(message);
  testThreadFunction.kill();
});

tap.test('should create an instance of Thread', async () => {
  smartspawn.setWorkerBasePath(__dirname);
  testThread = new smartspawn.Thread('child.ts');
  testThread.enableTypeScript();
  const message = await testThread.send('https://google.com');
  console.log(message);
  testThread.kill();
});

tap.test('should not spawn when nothing is sent', async () => {
  smartspawn.setWorkerBasePath(__dirname);
  let testThread = new smartspawn.Thread('child.ts');
});

tap.test('should run in a Pool', async () => {
  let testPool = new smartspawn.Pool();
  let testThread = new smartspawn.Thread('child.ts');
  testThread.assignToPool(testPool);

  // first run
  let message = await testThread.send('what');
  expect(message).to.equal('what');
  console.log(message);

  // second run
  message = await testThread.send('another');
  expect(message).to.equal('another');
  console.log(message);

  // kill all
  testThread.assignedPool.pool.killAll();
});

tap.test('should once', async () => {
  let testThread = new smartspawn.Thread('child.ts');
  const message = await testThread.sendOnce('what');
  expect(message).to.equal('what');
});

tap.start();
