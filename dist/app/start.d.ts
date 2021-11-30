import { Tonva } from 'tonwa-core';
import { AppConfig, CAppBase } from './CAppBase';
export declare function start(CApp: new (tonva: Tonva, config: AppConfig) => CAppBase<any>, tonva: Tonva, appConfig: AppConfig, isUserLogin?: boolean): Promise<void>;
