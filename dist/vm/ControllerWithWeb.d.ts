import { Tonva, User, Web } from "tonwa-core";
import { VPage } from "./VPage";
import { Controller, WebNav } from "./Controller";
export declare abstract class ControllerWithWeb extends Controller {
    readonly web: Web;
    constructor(tonva: Tonva);
    private receiveHandlerId;
    protected dispose: () => void;
    protected onDispose(): void;
    protected internalStart(param?: any, ...params: any[]): Promise<void>;
    get user(): User;
    get isLogined(): boolean;
    get webNav(): WebNav<any>;
    getWebNav(): WebNav<any>;
    get isWebNav(): boolean;
    navigate(url: string): void;
    isMe(id: any): boolean;
    protected onMessage(message: any): Promise<void>;
    private onMessageReceive;
    protected beforeStart(): Promise<boolean>;
    protected afterStart(): Promise<void>;
    protected registerReceiveHandler(): void;
    start(param?: any, ...params: any[]): Promise<void>;
    get isCalling(): boolean;
    private _resolve_$;
    call<T>(param?: any, ...params: any[]): Promise<T>;
    vCall<C extends Controller>(vp: new (controller: C) => VPage<C>, param?: any): Promise<any>;
    returnCall(value: any): void;
}
