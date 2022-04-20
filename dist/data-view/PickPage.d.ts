/// <reference types="react" />
export interface PickPagePropsBase<T> {
    header: string | JSX.Element;
    className?: string;
    ItemView: (props: {
        value: T;
    }) => JSX.Element;
    top?: JSX.Element;
    bottom?: JSX.Element;
}
interface PickPageProps<T> extends PickPagePropsBase<T> {
    items: T[];
}
export declare function PickPage<T>({ header, className, ItemView, items, top, bottom }: PickPageProps<T>): JSX.Element;
export {};
