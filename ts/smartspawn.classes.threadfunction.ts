import * as plugins from './smartspawn.plugins';
import * as smartpromise from '@pushrocks/smartpromise';

export interface IThreadFunction {
  (input, done): void;
}

export class ThreadFunction {
  thread;
  constructor(functionArg: IThreadFunction) {
    this.thread = plugins.threads.spawn(functionArg);
  }

  /**
   * sends a message to the spawned process
   */
  send<T>(message: any): Promise<T> {
    let done = smartpromise.defer<T>();
    this.thread
      .send(message)
      .on('message', (message: T) => {
        done.resolve(message);
      })
      .on('error', err => {
        done.reject(err);
      });
    return done.promise;
  }

  kill() {
    this.thread.kill();
  }
}
