import { Uq } from "tonwa-uq";
export declare class AutoRefresh {
    private readonly uq;
    private readonly refreshAction;
    private timer;
    constructor(uq: Uq, refreshAction: Promise<void>);
    start(): void;
    stop(): void;
    private refreshTime;
    refresh: () => Promise<void>;
    private tick;
    private gapIndex;
    private callTick;
}
