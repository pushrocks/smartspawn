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
     */
    send<T>(message: any): Promise<T>;
    kill(): void;
    assignToPool(poolArg: Pool): void;
    private checkSpawn();
}
