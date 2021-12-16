/// <reference types="react" />
import { /*centerApi, logoutApis, */ AppConfig as AppConfigCore, Tonwa, UqQuery, Web } from "tonwa-core";
import { User, UqsConfig as UqsConfigCore } from 'tonwa-core';
import { RouteFunc, Hooks, Navigo, NamedRoute } from "tonwa-core";
import { ControllerWithWeb } from '../vm';
export interface IConstructor<T> {
    new (...args: any[]): T;
}
export declare type UqsConfig = UqsConfigCore;
export interface AppConfig extends AppConfigCore {
    version: string;
    loginTop?: JSX.Element;
    oem?: string;
    privacy?: string;
    noUnit?: boolean;
    htmlTitle?: string;
}
export interface Elements {
    [id: string]: (element: HTMLElement) => void;
}
export declare abstract class CAppBase<U> extends ControllerWithWeb {
    private appConfig;
    private uqsMan;
    protected _uqs: U;
    readonly web: Web;
    timezone: number;
    unitTimezone: number;
    unitBizMonth: number;
    unitBizDate: number;
    constructor(tonwa: Tonwa, config?: AppConfig);
    get uqs(): U;
    internalT(str: string): any;
    setRes(res: any): void;
    protected afterBuiltUQs(uqs: any): void;
    protected loadUnitTime($getTimezone: UqQuery<any, any>): Promise<void>;
    bizDate(date: Date): Date;
    private uqsUser;
    protected initUQs(): Promise<any>;
    protected beforeStart(): Promise<boolean>;
    protected afterStart(): Promise<void>;
    userFromId(userId: number): Promise<any>;
    protected on(routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(url: string, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(regex: RegExp, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    protected on(options: {
        [url: string]: RouteFunc | NamedRoute;
    }): Navigo;
    protected onNavRoutes(): void;
    getUqRoles(uqName: string): Promise<string[]>;
    isAdmin(roles: string[]): boolean;
    isRole(roles: string[], role: string): boolean;
    protected onChangeLogin(user: User): Promise<void>;
}
