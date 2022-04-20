/// <reference types="react" />
import { BandProps } from '../band';
import { FieldProps } from './field';
interface SelectItem {
    label: string;
    value: string | number | boolean;
}
interface SelectProps extends FieldProps {
    options: SelectItem[];
    placeholder?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
export declare function BandSelect(props: BandProps & SelectProps): JSX.Element;
export {};
