import { User, Login } from 'tonwa-core';
import { ControllerWithWeb, VPage } from "../vm";
export declare class CLogin extends ControllerWithWeb implements Login {
    protected internalStart(): Promise<void>;
    showLogin(callback?: (user: User) => Promise<void>, withBack?: boolean): Promise<void>;
    showLogout(callback?: () => Promise<void>): Promise<void>;
    protected getVChangePassword(): new (cLogin: CLogin) => VPage<CLogin>;
    showChangePassword(): Promise<void>;
    showUserQuit(): Promise<void>;
}
