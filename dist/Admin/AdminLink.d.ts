/// <reference types="react" />
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
    me: number;
    loadAdmins: () => Promise<any[]>;
    LinkContent: (props: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function AdminLink({ LinkContent, me, loadAdmins, setAdmin, setMeAdmin }: Props): JSX.Element;
export {};
