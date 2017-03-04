import * as childProcess from 'child_process';
export declare class ThreadSimple {
    workerPath: string;
    threadChildProcess: childProcess.ChildProcess;
    forkOptions: childProcess.ForkOptions;
    constructor(filePathArg: string, forkOptionsArg?: childProcess.ForkOptions);
    run(): Promise<childProcess.ChildProcess>;
}
