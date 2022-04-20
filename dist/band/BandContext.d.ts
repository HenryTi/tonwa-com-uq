import React from "react";
import { BandContainerContext } from "./BandContainer";
interface NamedError {
    name: string;
    error: string;
}
export declare class BandContext {
    readonly container: BandContainerContext<any>;
    readonly errors: NamedError[];
    readonly memos: string[];
    readonly fields: {
        [name: string]: boolean;
    };
    readOnly: boolean;
    constructor(container: BandContainerContext<any>, memos: string[]);
    setError(name: string, error: string[]): void;
    clearError(name: string): void;
    clearAllErrors(): void;
}
export declare const VBandContext: React.Context<BandContext>;
export declare function useBand(): BandContext;
export {};
