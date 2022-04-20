/// <reference types="react" />
import { BandContainerProps, BandTemplateProps } from '../band';
import { Rule } from '../fields';
export interface FormProps extends BandContainerProps {
    rule?: Rule | Rule[];
}
export declare function FormBandTemplate1(props: BandTemplateProps): JSX.Element;
export declare function Form(props: FormProps): JSX.Element;
export declare function FormErrors(): JSX.Element;
export declare function BandFormErrors(): JSX.Element;
