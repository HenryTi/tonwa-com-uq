import { FetchError, Web } from "tonwa-core";
import { TonwaReact } from "../TonwaReact";
export declare class WebReact extends Web {
    private readonly tonwaReact;
    constructor(tonwaReact: TonwaReact);
    onError(error: FetchError): Promise<void>;
}
