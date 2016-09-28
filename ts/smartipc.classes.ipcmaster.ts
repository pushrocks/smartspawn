import * as plugins from './smartipc.plugins'
import { IpcTarget } from './smartipc.classes.ipctarget'

export interface IIpcServeOptions {
    
}

let defaultOptions: IIpcServeOptions = {
    
}

export interface IIpcChildProcess {
    alias: string
    filePath: string
    childProcess: plugins.childProcess.ChildProcess
}

/**
 * class Ipcserve is represents the master process for any chil processes
 */
export class IpcMaster extends IpcTarget {
    ipcOptions: IIpcServeOptions
    childProcessArray: IIpcChildProcess[]
    constructor(ipcOptionsArg: IIpcServeOptions) {
        super({alias: 'master'})
        this.ipcOptions = plugins.lodash.merge({},defaultOptions,ipcOptionsArg)
    }

    /**
     * spawns a child process 
     */
    spawnProcess(filePath: string, alias: string) {

        let childProcess = plugins.childProcess.fork('ls', ['-lh', '/usr'])

        childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
        })

        childProcess.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`)
        })

        childProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`)
        })
    }
}