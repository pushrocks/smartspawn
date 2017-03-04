import * as plugins from './smartipc.plugins'
import * as q from 'smartq'
import * as childProcess from 'child_process'

import { workerBasePath } from './smartipc.classes.thread'

export class ThreadSimple {
  workerPath: string
  threadChildProcess: childProcess.ChildProcess
  constructor (filePathArg: string) {
    this.workerPath = filePathArg
  }

  run () {
    let forkPath = (() => {
      if (workerBasePath) {
        return plugins.path.join(workerBasePath, this.workerPath)
      } else {
        return this.workerPath
      }
    })()
    this.threadChildProcess = childProcess.fork(forkPath)
    return this.threadChildProcess
  }
}
