import { ReactNode } from "react";
export declare enum EnumAdminRoleInEdit {
    sys = 1,
    admin = 2,
    nSys = -1,
    nAdmin = -2
}
export interface Admin {
    id: number;
    role: EnumAdminRoleInEdit;
    operator: number;
    create: number;
    update: number;
    user: number;
    assigned: string;
}
interface FuncProps {
    setMeAdmin: () => Promise<void>;
    setAdmin: (user: number, role: number, assigned: string) => Promise<void>;
}
export interface AdminProps extends FuncProps {
    meAdmin: Admin;
    sysAdmins: Admin[];
    admins: Admin[];
    me: number;
}
interface Props extends FuncProps {
    children: React.ReactNode;
    me: number;
    loadAdmins: () => Promise<any[]>;
    LinkContainer: (props: {
        onClick: () => void;
        children: ReactNode;
    }) => JSX.Element;
}
export declare function AdminLink({ LinkContainer, me, loadAdmins, setAdmin, setMeAdmin, children }: Props): JSX.Element;
export {};
