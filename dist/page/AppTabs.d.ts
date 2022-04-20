/// <reference types="react" />
import { TabItem } from './nav';
interface AppTabsProps {
    pages?: TabItem[];
    active?: TabItem;
    Tab?: (props: {
        title: string;
    }) => JSX.Element;
    TabKept?: (props: {
        title: string;
    }) => JSX.Element;
    TabClose?: () => JSX.Element;
}
export declare function AppTabs(props: AppTabsProps): JSX.Element;
export declare function AppTabsContainer({ children }: {
    children: React.ReactNode;
}): JSX.Element;
export {};
