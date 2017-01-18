import 'typings-global'

let threads = require('threads')

export interface IThreadFunction {
    (input, done): void
}

export class Thread {
    thread
    constructor(functionArg: IThreadFunction) {
        this.thread = threads.spawn(functionArg)
        this.thread.on('error', function() {

        })
        this.thread.on('exit' function() {

        })
        this.thread.on('message')
    }

    /**
     * sends a message to the spawned process
     */
    send(message) {
        this.thread.send(message)
    }

    /**
     * sends a message to 
     */
}