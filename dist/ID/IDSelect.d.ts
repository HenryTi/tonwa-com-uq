/// <reference types="react" />
import { ID, Uq } from "tonwa-uq";
interface Props<T = any> {
    Row: (props: {
        value: T;
    }) => JSX.Element;
    header?: string | JSX.Element;
    query: ((key: string) => Promise<T[]>) | {
        uq: Uq;
        ID: ID;
    };
}
export declare function IDSelect<T>({ header, Row, query }: Props): JSX.Element;
export {};
