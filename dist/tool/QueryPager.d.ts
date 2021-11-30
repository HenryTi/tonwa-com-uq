import { Query } from "tonwa-core";
import { PageItems } from "./PageItems";
export declare class QueryPager<T extends any> extends PageItems<T> {
    private query;
    private $page;
    protected idFieldName: any;
    constructor(query: Query, pageSize?: number, firstSize?: number, itemObservable?: boolean);
    setReverse(): void;
    protected onLoad(): Promise<void>;
    protected loadResults(param: any, pageStart: number, pageSize: number, $$user?: number): Promise<{
        [name: string]: any[];
    }>;
    protected getPageId(item: T): any;
    refreshItems(item: T): Promise<void>;
}
