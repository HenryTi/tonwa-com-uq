/// <reference types="react" />
import { ListPropsWithoutItems } from "tonwa-com";
import { ListEditContext } from "../ListEdit";
interface Props<T extends {
    id?: number;
}> extends ListPropsWithoutItems<T> {
    context: IDListEditContext<T>;
}
export declare class IDListEditContext<T extends {
    id?: number;
}> extends ListEditContext<T> {
    constructor(items: T[]);
    protected keyCompare(item1: T, item2: T): boolean;
}
export declare function IDListEdit<T extends {
    id?: number;
}>(props: Props<T>): JSX.Element;
export declare function useIdListEdit<T>(items: T[]): IDListEditContext<T>;
export {};
