import * as plugins from './smartipc.plugins'

interface IIpcServeOptions {
    appspace?: string
    socketRoot?: string
    id?: string
    networkHost?: string //should resolve to 127.0.0.1 or ::1 see the table below related to this 
    networkPort?: number
    encoding?: string
    rawBuffer?: boolean
    sync?: boolean
    silent?: boolean
    logInColor?: boolean
    logDepth?: number
    maxConnections?: number
    retry?: number
    maxRetries?: boolean
    stopRetrying?: boolean
}

let defaultOptions: IIpcServeOptions = {
    appspace: 'app.',
    socketRoot: '/tmp/',
    id: plugins.os.hostname(),
    networkHost: 'localhost', //should resolve to 127.0.0.1 or ::1 see the table below related to this 
    networkPort: 8000,
    encoding: 'utf8',
    rawBuffer: false,
    sync: false,
    silent: false,
    logInColor: true,
    logDepth: 5,
    maxConnections: 100,
    retry: 500,
    maxRetries: false,
    stopRetrying: false
}

export class IpcServe {
    ipcOptions: IIpcServeOptions
    constructor(ipcOptionsArg: IIpcServeOptions) {
        this.ipcOptions = plugins.lodash.merge({},defaultOptions,ipcOptionsArg)
    }
}