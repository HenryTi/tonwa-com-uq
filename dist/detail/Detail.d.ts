/// <reference types="react" />
import { BandContainerContext, BandContainerProps } from "../band";
interface DetailProps extends BandContainerProps {
}
declare class DetailContext extends BandContainerContext<DetailProps> {
    get isDetail(): boolean;
}
export declare function useDetail(): DetailContext;
export declare function Detail(props: DetailProps): JSX.Element;
export {};
