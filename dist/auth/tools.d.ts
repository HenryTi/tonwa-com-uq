/// <reference types="react" />
export declare const defaultLoginTop: JSX.Element;
interface Sender {
    type: string;
    caption: string;
    regex: RegExp;
}
export declare function getSender(un: string): Sender;
export {};
