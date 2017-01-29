import 'typings-global';
export interface IThreadFunction {
    (input: any, done: any): void;
}
export declare class ThreadFunction {
    thread: any;
    constructor(functionArg: IThreadFunction);
    /**
     * sends a message to the spawned process
     */
    send<T>(message: any): Promise<T>;
    kill(): void;
}
