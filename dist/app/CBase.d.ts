import { Web } from 'tonwa-core';
import { ControllerWithWeb, WebNav } from "../vm";
import { CAppBase, IConstructor } from "./CAppBase";
export declare abstract class CBase<A extends CAppBase<U>, U> extends ControllerWithWeb {
    constructor(cApp: A);
    readonly cApp: A;
    readonly uqs: U;
    readonly web: Web;
    get timezone(): number;
    get unitTimezone(): number;
    getUqRoles(uqName: string): Promise<string[]>;
    protected internalStart(param?: any, ...params: any[]): Promise<void>;
    internalT(str: string): any;
    protected newC<T extends CBase<A, U>>(type: IConstructor<T>, ...param: any[]): T;
    newSub<O extends CBase<A, U>, T extends CSub<A, U, O>>(type: IConstructor<T>, ...param: any[]): T;
    getWebNav(): WebNav<any>;
}
export declare abstract class CSub<A extends CAppBase<U>, U, T extends CBase<A, U>> extends CBase<A, U> {
    protected _owner: T;
    constructor(owner: T);
    internalT(str: string): any;
    protected get owner(): T;
    getWebNav(): WebNav<any>;
}
