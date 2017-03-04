import * as childProcess from 'child_process';
export declare class ThreadSimple {
    workerPath: string;
    threadChildProcess: childProcess.ChildProcess;
    constructor(filePathArg: string);
    run(): Promise<{}>;
}
