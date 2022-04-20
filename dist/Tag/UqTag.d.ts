import { ID, IX, Uq } from "tonwa-uq";
export interface Tag {
    id?: number;
    name: string;
    vice?: string;
    single?: number;
}
export interface TagWithItems extends Tag {
    items: Tag[];
}
export interface TagGroup extends Tag {
    tick?: number;
    tags: TagWithItems[];
}
export interface UqTagProps {
    uq: Uq;
    TagGroup: ID;
    Tag: ID;
    TagItem: ID;
    IxTag: IX;
    IxIDTag: IX;
    groups: TagGroup[];
}
export declare class UqTag {
    static catch: [Uq, UqTag][];
    static create(uqTagProps: UqTagProps): UqTag;
    private readonly uq;
    private readonly TagGroup;
    private readonly Tag;
    private readonly TagItem;
    private readonly IxTag;
    private readonly IxIDTag;
    private readonly groups;
    private readonly tagGroups;
    private constructor();
    is(uq: Uq, IxTag: IX, Tag: ID, TagItem: ID): boolean;
    getTags(group: Tag): Promise<Tag[]>;
    getTagItems(tag: Tag): Promise<Tag[]>;
    saveTag(group: TagGroup, tag: TagWithItems): Promise<void>;
    removeTag(group: TagGroup, tag: TagWithItems): Promise<void>;
    saveTagProp(tag: Tag, name: string, value: string): Promise<void>;
    saveTagItemName(tagItem: Tag, value: string): Promise<void>;
    removeTagItem(tag: Tag, tagItem: Tag): Promise<void>;
    saveTagItem(tag: Tag, tagItem: Tag): Promise<number>;
    saveTagItems(values: {
        ix: number;
        xi: number;
        index: number;
    }[]): Promise<void>;
    private groupsLoaded;
    resetGroups(): void;
    loadGroups(): Promise<void>;
    loadGroup(tagGroupName: string): Promise<TagGroup>;
    loadIDTags(tagGroup: TagGroup, id: number): Promise<{
        [id: number]: boolean;
    }>;
}
export declare function useUqTag(uqTagProps: UqTagProps): UqTag;
