export declare class AutoRefresh {
    private readonly poke;
    private readonly refreshAction;
    private timer;
    constructor(poke: () => Promise<{
        ret: {
            poke: number;
        }[];
    }>, refreshAction: Promise<void>);
    start(): void;
    stop(): void;
    private refreshTime;
    refresh: () => Promise<void>;
    private tick;
    private gapIndex;
    private callTick;
}
