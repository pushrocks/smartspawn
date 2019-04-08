import * as plugins from './smartspawn.plugins';
import * as paths from './smartspawn.paths';
import * as smartpromise from '@pushrocks/smartpromise';

import { Pool } from './smartspawn.classes.pool';
import { startSpawnWrap, endSpawnWrap } from './smartspawn.wrap';

export let workerBasePath: string = null;

export const setWorkerBasePath = (basePathArg: string) => {
  workerBasePath = basePathArg;
  plugins.threads.config.set({
    basepath: {
      node: workerBasePath
    }
  });
};

export class Thread {
  thread;
  workerPath: string;
  running: boolean = false;
  assignedPool: Pool = null;
  constructor(filePathArg: string) {
    this.workerPath = filePathArg;
  }

  /**
   * sends a message to the spawned process
   * spawns it and keeps running
   */
  send<T>(message: any): Promise<T> {
    let done = smartpromise.defer<T>();
    this._checkSpawn();
    this.thread.send(message);
    this.thread.on('message', (message: T) => {
      done.resolve(message);
    });
    this.thread.on('done', (job, message: T) => {
      done.resolve(message);
    });
    this.thread.on('error', err => {
      done.reject(err);
    });
    return done.promise;
  }

  /**
   * sends a command once and then kills the child process
   */
  sendOnce<T>(message): Promise<T> {
    let done = smartpromise.defer<T>();
    this.send<T>(message).then(message => {
      done.resolve(message);
      this.kill();
    });
    return done.promise;
  }

  /**
   * kills the thread
   */
  kill() {
    this.thread.kill();
    this.running = false;
  }

  assignToPool(poolArg: Pool) {
    this.assignedPool = poolArg;
  }

  enableTypeScript() {
    // TODO:
  }

  private _checkSpawn() {
    if (!this.running && !this.assignedPool) {
      this.running = true;
      this.thread = plugins.threads.spawn(this.workerPath);
    } else if (!this.running && this.assignedPool) {
      this.running = true;
      this.thread = this.assignedPool.run(this.workerPath);
    }
  }
}
