/// <reference types="react" />
import { User } from 'tonwa-uq';
interface Props {
    withBack?: boolean;
    loginTop?: JSX.Element;
    privacy: JSX.Element;
    callback?: (user: User) => Promise<void>;
}
export declare function Login({ withBack, loginTop, privacy, callback }: Props): JSX.Element;
export {};
