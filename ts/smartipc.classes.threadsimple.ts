import * as plugins from './smartipc.plugins'
import * as smartq from 'smartq'
import * as childProcess from 'child_process'

import { workerBasePath } from './smartipc.classes.thread'

export class ThreadSimple {
  workerPath: string
  threadChildProcess: childProcess.ChildProcess
  forkOptions: childProcess.ForkOptions
  constructor (filePathArg: string, forkOptionsArg: childProcess.ForkOptions = {}) {
    this.workerPath = filePathArg
    this.forkOptions = forkOptionsArg
  }

  run () {
    let done = smartq.defer<childProcess.ChildProcess>()
    let forkPath = (() => {
      if (workerBasePath) {
        return plugins.path.join(workerBasePath, this.workerPath)
      } else {
        return this.workerPath
      }
    })()
    this.threadChildProcess = childProcess.fork(forkPath, [], this.forkOptions)
    done.resolve(this.threadChildProcess)
    return done.promise
  }
}
