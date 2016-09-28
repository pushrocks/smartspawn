import * as plugins from './smartipc.plugins'

export interface ITargetConstructorOptions {
    alias: string
}

/**
 * 
 */
export class IpcTarget {
    alias: string
    private funcArray: any[]
    
    constructor(optionsArg: ITargetConstructorOptions) {
        this.alias = optionsArg.alias
    }

    /**
     * registers a function
     */
    register(funcArrayArg: any[]) {
        for (let funcItem of funcArrayArg){
            this.funcArray.push(funcItem)
        }
    }

}
