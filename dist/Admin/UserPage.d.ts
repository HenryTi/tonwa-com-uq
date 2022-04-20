/// <reference types="react" />
import { User } from "tonwa-uq";
import { Admin } from "./AdminLink";
interface Props {
    me: number;
    admin: Admin;
    setAdmin: (assinged: string) => Promise<void>;
    delAdmin: () => Promise<void>;
}
export declare function UserTemplate({ user, assigned }: {
    user: User;
    assigned: string;
}): JSX.Element;
export declare function UserPage({ admin, me, setAdmin, delAdmin }: Props): JSX.Element;
export {};
