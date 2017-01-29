import * as plugins from './smartipc.plugins'
import * as q from 'smartq'

import { Pool } from './smartipc.classes.pool'

export let setWorkerBasePath = (basePathArg: string) => {
    plugins.threads.config.set({
        basepath: {
            node: basePathArg
        }
    })
}

export class Thread {
    thread
    workerPath: string
    running: boolean = false
    assignedPool: Pool = null
    constructor(filePathArg: string) {
        this.workerPath = filePathArg
    }

    /**
     * sends a message to the spawned process
     */
    send<T>(message: any): Promise<T> {
        let done = q.defer<T>()
        this.checkSpawn()
        this.thread.send(message)
        this.thread.on('message', (message: T) => {
            done.resolve(message)
        })
        this.thread.on('done', (job, message: T) => {
            done.resolve(message)
        })
        this.thread.on('error', err => {
            done.reject(err)
        })
        return done.promise
    }

    kill() {
        this.thread.kill()
        this.running = false
    }

    assignToPool(poolArg: Pool) {
        this.assignedPool = poolArg
    }

    private checkSpawn() {
        if (!this.running && !this.assignedPool) {
            this.running = true
            this.thread = plugins.threads.spawn(this.workerPath)
        } else if (!this.running && this.assignedPool) {
            this.running = true
            this.thread = this.assignedPool.run(this.workerPath)
        }
    }
}