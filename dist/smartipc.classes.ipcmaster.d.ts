import * as plugins from './smartipc.plugins';
import { IpcTarget } from './smartipc.classes.ipctarget';
export interface IIpcServeOptions {
}
export interface IIpcChildProcess {
    alias: string;
    filePath: string;
    childProcess: plugins.childProcess.ChildProcess;
}
/**
 * class Ipcserve is represents the master process for any chil processes
 */
export declare class IpcMaster extends IpcTarget {
    ipcOptions: IIpcServeOptions;
    childProcessArray: IIpcChildProcess[];
    constructor(ipcOptionsArg: IIpcServeOptions);
    /**
     * spawns a child process
     */
    spawnProcess(filePath: string, alias: string): void;
}
