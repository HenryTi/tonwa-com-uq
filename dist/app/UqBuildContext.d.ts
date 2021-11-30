import { UqBuildContext } from "tonwa-core";
export declare class UqBuildContextUI extends UqBuildContext {
    get uiPlatform(): string;
    get uiPlatformUpper(): string;
    get uiPlatformCamel(): string;
    get element(): string;
}
