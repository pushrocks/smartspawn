export declare let setWorkerBasePath: (basePathArg: string) => void;
export declare class Thread {
    thread: any;
    constructor(filePathArg: string);
    /**
     * sends a message to the spawned process
     */
    send<T>(message: any): Promise<T>;
    kill(): void;
}
