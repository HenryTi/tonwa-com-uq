/// <reference types="react" />
import { Widget } from './widget';
import { UiPick } from '../../schema';
export declare class PickWidget extends Widget {
    protected get ui(): UiPick;
    setReadOnly(value: boolean): void;
    setDisabled(value: boolean): void;
    protected onClick: () => Promise<void>;
    setValue(value: any): void;
    render(): JSX.Element;
}
