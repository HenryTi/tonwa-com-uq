/// <reference types="react" />
import { /*ParamActDetail, ParamActDetail2, ParamActDetail3, ParamActIX
    , ParamActIXSort, ParamID, ParamIDDetailGet, ParamIDinIX, ParamIDLog
    , ParamIDNO, ParamIDSum, ParamIDTree, ParamIDxID, ParamIX, ParamKeyID
    , ParamKeyIX, ParamQueryID, RetActDetail, RetActDetail2, RetActDetail3
    , Uq, */ UqMan } from "tonwa-core";
export declare class Uq {
    private $_uqMan;
    constructor(uqMan: UqMan);
    $_createProxy(): {
        [name: string]: import("tonwa-core").Entity;
    };
    private showReload;
    protected IDRender: (id: number, render?: (value: any) => JSX.Element) => JSX.Element;
    protected IDV: <T extends object>(id: number) => T;
    private renderIDUnknownType;
    protected IDLocalV: <T extends object>(id: number) => T;
    protected IDLocalRender: (id: number, render?: (value: any) => JSX.Element) => JSX.Element;
}
