/// <reference types="react" />
import { Uq } from "tonwa-uq";
import { UqID } from "tonwa-uq";
interface Props<T = any> {
    id: number;
    uq: Uq;
    ID?: UqID<T>;
    Template: (props: {
        value: T;
    }) => JSX.Element;
}
export declare function IdView({ id, uq, Template, ID }: Props): JSX.Element;
export {};
