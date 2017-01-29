import * as plugins from './smartipc.plugins'
import * as q from 'smartq'

export let setWorkerBasePath = (basePathArg: string) => {
    plugins.threads.config.set({
        basepath: {
            node: basePathArg
        }
    })
}

export class Thread {
    thread
    constructor(filePathArg: string) {
        this.thread = plugins.threads.spawn(filePathArg)
    }

    /**
     * sends a message to the spawned process
     */
    send<T>(message: any): Promise<T> {
        let done = q.defer<T>()
        this.thread.send(message).on('message', (message: T) => {
            done.resolve(message)
        }).on('error', err => {
            done.reject(err)
        })
        return done.promise
    }

    kill() {
        this.thread.kill()
    }
}