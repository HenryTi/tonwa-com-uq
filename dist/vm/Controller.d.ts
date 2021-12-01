/// <reference types="react" />
import { PageHeaderProps, PageWebNav, Tonwa, Nav } from 'tonwa-core';
import { VPage } from './VPage';
import { View } from './View';
export interface ConfirmOptions {
    caption?: string;
    message: string | JSX.Element;
    classNames?: string;
    ok?: string;
    yes?: string;
    no?: string;
}
export interface WebNav<C extends Controller> {
    VNavHeader?: new (controller: C) => View<C>;
    VNavRawHeader?: new (controller: C) => View<C>;
    VNavFooter?: new (controller: C) => View<C>;
    VNavRawFooter?: new (controller: C) => View<C>;
    renderPageHeader?: (props: PageHeaderProps<JSX.Element>) => JSX.Element;
}
export declare abstract class Controller {
    protected readonly tonwa: Tonwa;
    protected nav: Nav;
    protected res: any;
    t: (str: string) => string | JSX.Element;
    icon: string | JSX.Element;
    label: string | JSX.Element;
    readonly isDev: boolean;
    pageWebNav: PageWebNav<JSX.Element>;
    constructor(tonwa: Tonwa);
    shallow<T extends object>(data: T): T;
    deep<T extends object>(data: T): T;
    private buildReactiveProps;
    runInAction<T>(fn: () => T): T;
    getTonwa(): Tonwa;
    protected beforeInit(): void;
    protected afterInit(): void;
    internalInit(...param: any[]): void;
    init(...param: any[]): void;
    internalT(str: string): any;
    getPageWebNav(): PageWebNav;
    setRes(res: any): void;
    getRes(): any;
    protected openVPage<C extends Controller, P extends VPage<C>>(vp: new (controller: C) => P, param?: any, afterBack?: (ret: any) => void): Promise<P>;
    protected replaceVPage<C extends Controller, P extends VPage<C>>(vp: new (controller: C) => P, param?: any, afterBack?: (ret: any) => void): Promise<P>;
    protected renderView<C extends Controller, V extends View<C>>(view: new (controller: C) => V, param?: any): JSX.Element;
    event(type: string, value: any): Promise<void>;
    protected onEvent(type: string, value: any): Promise<void>;
    protected msg(text: string): void;
    protected errorPage(header: string, err: any): void;
    openPage(page: JSX.Element, onClosePage?: (ret: any) => void): void;
    replacePage(page: JSX.Element, onClosePage?: () => void): void;
    backPage(): void;
    closePage(level?: number): void;
    ceasePage(level?: number): void;
    go(showPage: () => void, url: string, absolute?: boolean): void;
    removeCeased(): void;
    regConfirmClose(confirmClose: () => Promise<boolean>): void;
    private topPageKey;
    protected startAction(): void;
    get TopKey(): any;
    SetTopKey(key: any): void;
    popToTopPage(): void;
    confirm(options: ConfirmOptions): Promise<'ok' | 'yes' | 'no' | undefined>;
}
