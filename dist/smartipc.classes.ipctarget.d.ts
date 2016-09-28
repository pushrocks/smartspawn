export interface ITargetConstructorOptions {
    alias: string;
}
/**
 *
 */
export declare class IpcTarget {
    alias: string;
    private funcArray;
    constructor(optionsArg: ITargetConstructorOptions);
    /**
     * registers a function
     */
    register(funcArrayArg: any[]): void;
}
