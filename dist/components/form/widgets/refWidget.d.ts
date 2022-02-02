/// <reference types="react" />
import { Widget } from './widget';
import { UiRef } from '../../schema';
export declare class RefWidget extends Widget {
    protected get ui(): UiRef;
    setReadOnly(value: boolean): void;
    setDisabled(value: boolean): void;
    protected onClick: () => Promise<void>;
    setValue(value: any): void;
    render(): JSX.Element;
}
