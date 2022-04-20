/// <reference types="react" />
import { UqTag, TagWithItems } from "./UqTag";
interface Props {
    uqTag: UqTag;
    tag: TagWithItems;
    onRemoveTag: () => void;
    renderFields: () => JSX.Element;
}
export declare function EditTagPage({ uqTag, tag, onRemoveTag, renderFields }: Props): JSX.Element;
export {};
