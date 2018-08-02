import * as plugins from './smartspawn.plugins';

export class Pool {
  pool;

  // the constructor for pool
  constructor() {
    this.pool = new plugins.threads.Pool();
  }
  run(workerPathArg: string) {
    return this.pool.run(workerPathArg);
  }
}
