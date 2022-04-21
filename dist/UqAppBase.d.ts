import React, { ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { AppNav } from 'tonwa-com';
import { Hosts, UqConfig, User, UserApi } from 'tonwa-uq';
import { Net } from "tonwa-uq";
export interface AppConfig {
    center: string;
    debug: Hosts;
    version: string;
    loginTop?: JSX.Element;
    oem?: string;
    privacy?: string;
    noUnit?: boolean;
    htmlTitle?: string;
}
export declare abstract class UqAppBase<U = any> {
    private readonly appConfig;
    private readonly uqConfigs;
    private localData;
    readonly uqAppBaseId: number;
    readonly net: Net;
    readonly appNav: AppNav;
    readonly userApi: UserApi;
    readonly version: string;
    readonly responsive: {
        user: User;
    };
    guest: number;
    uqs: U;
    constructor(appConfig: AppConfig, uqConfigs: UqConfig[]);
    initAppNav(initPage: React.ReactNode, navigateFunc: NavigateFunction): void;
    logined(user: User): void;
    setUserProp(propName: string, value: any): Promise<void>;
    saveLocalData(): void;
    private uqsUserId;
    init(): Promise<any>;
}
export declare const UqAppContext: React.Context<any>;
export declare function useUqAppBase<U, T extends UqAppBase<U> = UqAppBase<U>>(): T;
export declare function UqAppBaseView<T extends UqAppBase>({ uqApp, children }: {
    uqApp: T;
    children: ReactNode;
}): JSX.Element;