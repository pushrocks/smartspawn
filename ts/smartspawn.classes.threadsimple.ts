import * as plugins from './smartspawn.plugins';
import * as smartpromise from '@pushrocks/smartpromise';
import * as childProcess from 'child_process';

export class ThreadSimple {
  public workerPath: string;
  public threadChildProcess: childProcess.ChildProcess;
  public forkOptions: childProcess.ForkOptions;
  public argvArgs: string[];
  constructor(
    filePathArg: string,
    argvArgs: string[] = [],
    forkOptionsArg: childProcess.ForkOptions = {}
  ) {
    this.workerPath = filePathArg;
    this.forkOptions = forkOptionsArg;
    this.argvArgs = argvArgs;
  }

  public async start() {
    const forkPath = this.workerPath;
    this.threadChildProcess = childProcess.fork(forkPath, this.argvArgs, this.forkOptions);
    return this.threadChildProcess;
  }

  public async stop() {
    this.threadChildProcess.kill();
  }
}
