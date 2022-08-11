/// <reference types="react" />
import { UqID } from "tonwa-uq";
interface Props<T extends {
    id?: number;
}> {
    id: number;
    ID: UqID<T>;
    Template: (props: {
        value: T;
    }) => JSX.Element;
}
export declare function IDValue<T extends {
    id?: number;
}>({ id, ID, Template }: Props<T>): JSX.Element;
export {};
