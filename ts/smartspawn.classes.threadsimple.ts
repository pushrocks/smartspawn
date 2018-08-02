import * as plugins from './smartspawn.plugins';
import * as smartq from 'smartq';
import * as childProcess from 'child_process';

import { workerBasePath } from './smartspawn.classes.thread';

export class ThreadSimple {
  workerPath: string;
  threadChildProcess: childProcess.ChildProcess;
  forkOptions: childProcess.ForkOptions;
  argvArgs: string[];
  constructor(
    filePathArg: string,
    argvArgs: string[] = [],
    forkOptionsArg: childProcess.ForkOptions = {}
  ) {
    this.workerPath = filePathArg;
    this.forkOptions = forkOptionsArg;
    this.argvArgs = argvArgs;
  }

  run() {
    let done = smartq.defer<childProcess.ChildProcess>();
    let forkPath = (() => {
      if (workerBasePath) {
        return plugins.path.join(workerBasePath, this.workerPath);
      } else {
        return this.workerPath;
      }
    })();
    this.threadChildProcess = childProcess.fork(forkPath, this.argvArgs, this.forkOptions);
    done.resolve(this.threadChildProcess);
    return done.promise;
  }
}
