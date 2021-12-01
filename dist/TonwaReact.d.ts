/// <reference types="react" />
import { FetchError, Nav, Tonwa, Web } from "tonwa-core";
import 'font-awesome/css/font-awesome.min.css';
import './css/va-form.css';
import './css/va.css';
import './css/animation.css';
import { NavView } from './nav';
export declare class TonwaReact extends Tonwa {
    navView: NavView;
    constructor();
    createWeb(): Web;
    createObservableMap<K, V>(): Map<K, V>;
    set(navView: NavView): void;
    get nav(): Nav<JSX.Element>;
    renderNavView(onLogined: (isUserLogin?: boolean) => Promise<void>, notLogined?: () => Promise<void>, userPassword?: () => Promise<{
        user: string;
        password: string;
    }>): JSX.Element;
    showAppView(isUserLogin?: boolean): Promise<void>;
    privacyEntry(): JSX.Element;
    private getPrivacyContent;
    showPrivacyPage: () => void;
    private privacyPage;
    showRegister(): Promise<void>;
    showForget(): Promise<void>;
    resetAll: () => void;
    showReloadPage(msg: string): void;
    onError(fetchError: FetchError): Promise<void>;
    private upgradeUq;
    showUpgradeUq(uq: string, version: number): Promise<void>;
}
