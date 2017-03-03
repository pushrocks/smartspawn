import 'typings-global'
import * as plugins from './smartipc.plugins'
import * as q from 'smartq'

export interface IThreadFunction {
  (input, done): void
}

export class ThreadFunction {
  thread
  constructor(functionArg: IThreadFunction) {
    this.thread = plugins.threads.spawn(functionArg)
  }

  /**
   * sends a message to the spawned process
   */
  send<T>(message: any): Promise<T> {
    let done = q.defer<T>()
    this.thread.send(message).on('message', (message: T) => {
      done.resolve(message)
    }).on('error', err => {
      done.reject(err)
    })
    return done.promise
  }

  kill() {
    this.thread.kill()
  }
}
