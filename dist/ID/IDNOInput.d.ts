/// <reference types="react" />
import { ID } from "tonwa-uq";
import { BandProps } from "tonwa-com";
interface Props {
    name: string;
    ID: ID;
    editable?: boolean;
}
export declare function IDNOInput({ name, ID, editable }: Props): JSX.Element;
export declare function BandIDNOInput(props: BandProps & Props): JSX.Element;
export {};
