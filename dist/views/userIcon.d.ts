import * as React from 'react';
import { User, Web } from 'tonwa-core';
export declare type UserLoader = (userId: number) => Promise<any>;
export declare class UserCache<T> {
    private readonly web;
    private readonly loader;
    private onLoaded;
    private map;
    constructor(web: Web, loader: UserLoader);
    use(id: number | any, onLoaded?: (user: User) => void): void;
    getValue(id: number | any): any;
}
export interface UserIconProps {
    web: Web;
    id: number;
    className?: string;
    style?: React.CSSProperties;
    altImage?: string;
    noneImage?: any;
}
export declare const UserIcon: (props: UserIconProps) => JSX.Element;
export interface UserViewProps {
    web: Web;
    id?: number;
    user?: number | User;
    render: (user: User) => JSX.Element;
    onLoaded?: (user: User) => void;
}
export declare const UserView: (props: UserViewProps) => JSX.Element;
export declare function useUser(web: Web, id: number | object, onLoaded?: (user: User) => void): void;
