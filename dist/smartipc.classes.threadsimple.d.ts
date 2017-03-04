import * as childProcess from 'child_process';
export declare class ThreadSimple {
    workerPath: string;
    threadChildProcess: childProcess.ChildProcess;
    forkOptions: childProcess.ForkOptions;
    argvArgs: string[];
    constructor(filePathArg: string, argvArgs?: string[], forkOptionsArg?: childProcess.ForkOptions);
    run(): Promise<childProcess.ChildProcess>;
}
