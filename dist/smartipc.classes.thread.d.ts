import { Pool } from './smartipc.classes.pool';
export declare let setWorkerBasePath: (basePathArg: string) => void;
export declare class Thread {
    thread: any;
    workerPath: string;
    running: boolean;
    assignedPool: Pool;
    constructor(filePathArg: string);
    /**
     * sends a message to the spawned process
     * spawns it and keeps running
     */
    send<T>(message: any): Promise<T>;
    /**
     * sends a command once and then kills the child process
     */
    sendOnce<T>(message: any): Promise<T>;
    /**
     * kills the thread
     */
    kill(): void;
    assignToPool(poolArg: Pool): void;
    private checkSpawn();
}
