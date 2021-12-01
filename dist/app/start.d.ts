import { Tonwa } from 'tonwa-core';
import { AppConfig, CAppBase } from './CAppBase';
export declare function start(CApp: new (tonwa: Tonwa, config: AppConfig) => CAppBase<any>, tonwa: Tonwa, appConfig: AppConfig, isUserLogin?: boolean): Promise<void>;
