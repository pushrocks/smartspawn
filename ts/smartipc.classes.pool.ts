import * as plugins from './smartipc.plugins'

export class Pool {
  pool
  constructor() {
    this.pool = new plugins.threads.Pool()
  }
  run(workerPathArg: string) {
    return this.pool.run(workerPathArg)
  }
}
