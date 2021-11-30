import * as React from 'react';
import { FetchError, PageWebNav } from 'tonwa-core';
export interface Props {
    onLogined: (isUserLogin?: boolean) => Promise<void>;
    notLogined?: () => Promise<void>;
    userPassword?: () => Promise<{
        user: string;
        password: string;
    }>;
}
export interface StackItem {
    key: number;
    view: JSX.Element;
    ceased: boolean;
    confirmClose?: () => Promise<boolean>;
    disposer?: () => void;
}
export interface NavViewState {
    notSupportedBrowser: boolean;
    stack: StackItem[];
    wait: 0 | 1 | 2;
    fetchError: FetchError;
}
export declare class NavView extends React.Component<Props, NavViewState> {
    private stack;
    private waitCount;
    private waitTimeHandler?;
    isWebNav: boolean;
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    get level(): number;
    startWait(): void;
    endWait(): void;
    show(view: JSX.Element, disposer?: () => void): number;
    push(view: JSX.Element, disposer?: () => void): number;
    replace(view: JSX.Element, disposer?: () => void): number;
    ceaseTop(level?: number): void;
    pop(level?: number): void;
    popTo(key: number): void;
    topKey(): number;
    removeCeased(): void;
    private popAndDispose;
    private dispose;
    clear(): void;
    regConfirmClose(confirmClose: () => Promise<boolean>): void;
    private isHistoryBack;
    navBack: () => void;
    back: (confirm?: boolean) => Promise<void>;
    confirmBox(message?: string): boolean;
    clearError: () => void;
    render(): JSX.Element;
    private refresh;
    backIcon: JSX.Element;
    closeIcon: JSX.Element;
    setIsWebNav(): void;
    pageWebNav: PageWebNav<JSX.Element>;
    renderNavView(onLogined: any, onNotLogined?: any): JSX.Element;
}
