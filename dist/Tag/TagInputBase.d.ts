/// <reference types="react" />
import { BandTemplateProps } from "tonwa-com";
import { UqTagProps } from "./UqTag";
interface Props {
    uqTagProps: UqTagProps;
    id: number;
    className?: string;
    tagGroupName: string;
    BandTemplate?: (props: BandTemplateProps) => JSX.Element;
    top?: JSX.Element;
    bottom?: JSX.Element;
}
export declare function TagInputBase(props: Props): JSX.Element;
export {};
