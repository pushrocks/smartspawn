import * as plugins from './smartipc.plugins'
import { IpcTarget } from './smartipc.classes.ipctarget'

export interface IpcChildConstructorOptions {

}

let defaultOptions: IpcChildConstructorOptions = {

}

/**
 * class Ipcclient represents the child process
 */
export class IpcChild extends IpcTarget {
    constructor(optionsArg: IpcChildConstructorOptions) {
        super({alias: 'child'})
    }
    call(ipctarget,targetFunction,dataArg) {
        
    }
}