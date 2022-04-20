/// <reference types="react" />
import { PickPagePropsBase } from "./PickPage";
export declare type ItemsQuery<T> = (param?: string, pageStart?: any, pageSize?: number) => Promise<T[]>;
export interface PickQueryPageProps<T> extends PickPagePropsBase<T> {
    query: ItemsQuery<T>;
    allowSearch?: boolean;
    allowNew?: boolean;
    pagination?: 'none' | 'infinite' | 'next';
}
export declare function PickQueryPage<T>(props: PickQueryPageProps<T>): JSX.Element;
