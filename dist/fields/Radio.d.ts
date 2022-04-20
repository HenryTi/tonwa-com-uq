/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface RadioItem {
    label: string;
    value: string | number | boolean;
}
interface RadioProps extends FieldProps {
    options: RadioItem[];
}
export declare function Radio(props: RadioProps): JSX.Element;
export declare function BandRadio(props: BandProps & RadioProps): JSX.Element;
export {};
