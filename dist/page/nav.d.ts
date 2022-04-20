import React from "react";
import { AppNav, TabNav } from "./AppNav";
export interface StackItem {
    key: string;
    page: JSX.Element;
    onClose?: () => boolean;
}
export interface TabItem extends StackItem {
    title: string;
    keep?: boolean;
}
export declare class StackNav<T extends StackItem> {
    readonly data: {
        stack: T[];
    };
    private callStack;
    private pageKeyNO;
    constructor();
    open(page: JSX.Element | (() => Promise<JSX.Element>), onClose?: () => boolean): void;
    protected internalOpen(page: JSX.Element, onClose?: () => boolean): void;
    close(level?: number): void;
    call<T>(page: JSX.Element | (() => Promise<JSX.Element>)): Promise<T>;
    returnCall<T>(returnValue: T): void;
    confirm(msg: string): Promise<boolean>;
    clear(): void;
    protected innerClose(): void;
}
export declare class Nav extends StackNav<StackItem> {
    readonly appNav: AppNav;
    readonly tabNav: TabNav;
    constructor(appNav: AppNav, tabNav: TabNav, initPage: React.ReactNode);
    openTab(tabItem: TabItem): void;
    protected innerClose(): void;
}
export declare const AppNavContext: React.Context<AppNav>;
export declare const TabNavContext: React.Context<TabNav>;
export declare const PageStackContext: React.Context<Nav>;
export declare function useAppNav(): AppNav;
export declare function useTabNav(): TabNav;
export declare function useNav(): Nav;
