/// <reference types="react" />
import { UqMan } from "tonwa-core";
export declare class Uq {
    private $_uqMan;
    private $_uqSql;
    constructor(uqMan: UqMan);
    $_createProxy(): {
        [name: string]: import("tonwa-core").Entity;
    };
    private $_createUqSqlProxy;
    private showReload;
    protected IDRender: (id: number, render?: (value: any) => JSX.Element) => JSX.Element;
    protected IDV: <T extends object>(id: number) => T;
    private renderIDUnknownType;
    protected IDLocalV: <T extends object>(id: number) => T;
    protected IDLocalRender: (id: number, render?: (value: any) => JSX.Element) => JSX.Element;
}
