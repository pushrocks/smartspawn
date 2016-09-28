import { IpcTarget } from './smartipc.classes.ipctarget';
export interface IpcChildConstructorOptions {
}
/**
 * class Ipcclient represents the child process
 */
export declare class IpcChild extends IpcTarget {
    constructor(optionsArg: IpcChildConstructorOptions);
    call(ipctarget: any, targetFunction: any, dataArg: any): void;
}
