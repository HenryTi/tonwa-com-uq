import React from 'react';
import { BandContainerContext } from '../band';
import { FormProps } from './Form';
export declare class FormContext extends BandContainerContext<FormProps> {
    readonly errorResponse: {
        hasError: boolean;
        errors: string[];
    };
    constructor(props: FormProps);
    get isDetail(): boolean;
    setError(name: string, err: string | string[]): boolean;
    clearError(name: string): boolean;
    clearAllErrors(): void;
    clearValues(): void;
}
export declare const VFormContext: React.Context<FormContext>;
export declare function useForm(): FormContext;
