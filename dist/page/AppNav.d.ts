import React from "react";
import { NavigateFunction, NavigateOptions, To } from "react-router-dom";
import { StackItem, StackNav, TabItem } from "./nav";
interface ErrorInPage {
    err: string;
    message: string;
}
export declare class AppNav extends StackNav<StackItem> {
    readonly response: {
        isLogined: boolean;
        error: ErrorInPage;
    };
    readonly tabNav: TabNav;
    private navigateFunc;
    init(initPage: React.ReactNode, navigateFunc: NavigateFunction): void;
    navigate(to: To, options?: NavigateOptions): void;
    onLoginChanged: (isLogined: boolean) => void;
    setError(err: string, message: string): void;
    clearError(): void;
}
export declare class TabNav extends StackNav<TabItem> {
    readonly appNav: AppNav;
    readonly itemsArr: TabItem[];
    readonly response: {
        active: TabItem;
    };
    defaultActive: TabItem;
    constructor(appNav: AppNav);
    setInitTabs(initPageItems: TabItem[], defaultActive: TabItem): void;
    openTab(pageItem: TabItem): void;
    activate(pageItem: TabItem): void;
    closeTab(pageItem?: TabItem): void;
}
export {};
