import React from "react";
import { BandTemplateProps } from "./Band";
import { BandContext } from "./BandContext";
import { FieldItem } from "../fields";
export declare type OnValuesChanged = (values: {
    name: string;
    value: any;
    preValue: any;
}, context: BandContainerContext<any>) => Promise<void>;
export interface BandContainerProps {
    className?: string;
    children: React.ReactNode;
    stringClassName?: string;
    checkClassName?: string;
    pickClassName?: string;
    values?: {
        [name: string]: any;
    };
    BandTemplate?: (props: BandTemplateProps) => JSX.Element;
    readOnly?: boolean;
    onValuesChanged?: OnValuesChanged;
}
export declare abstract class BandContainerContext<P extends BandContainerProps> {
    readonly defaultStringClassName = "form-control";
    readonly defaultCheckClassName = "form-check-input";
    readonly defaultSelectClassName = "form-select";
    readonly defaultPickClassName = "form-control";
    readonly defaultRangeClassName = "form-range";
    readonly defaultNone = "-";
    readonly fields: {
        [name: string]: FieldItem;
    };
    readonly fieldStates: {
        [name: string]: {
            readOnly: boolean;
            disabled: boolean;
        };
    };
    readonly bands: BandContext[];
    readonly BandTemplate?: (props: BandTemplateProps) => JSX.Element;
    readonly props: P;
    readonly valueResponse: {
        values: {
            [name: string]: any;
        };
    };
    readonly readOnly: boolean;
    constructor(props: P);
    abstract get isDetail(): boolean;
    onValuesChanged: (values: any) => Promise<void>;
    setValue(name: string, value: any): void;
    setError(name: string, err: string[]): boolean;
    clearError(name: string): boolean;
    clearAllErrors(): void;
    setReadonly(name: string, readOnly: boolean): void;
    setDisabled(name: string, disabled: boolean): void;
}
export declare const VBandContainerContext: React.Context<BandContainerContext<BandContainerProps>>;
export declare function useBandContainer(): BandContainerContext<BandContainerProps>;
