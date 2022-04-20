/// <reference types="react" />
import { Pass } from './Pass';
declare type OnVerify = (verify: string) => Promise<number>;
interface Props {
    pass: Pass;
    onVerify: OnVerify;
}
export declare function Verify({ pass, onVerify }: Props): JSX.Element;
export {};
