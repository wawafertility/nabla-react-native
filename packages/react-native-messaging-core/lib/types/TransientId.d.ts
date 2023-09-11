export declare class RemoteId {
    readonly type = "Remote";
    readonly clientId: string | undefined;
    readonly remoteId: string;
    constructor(remoteId: string, clientId?: string | undefined);
}
export declare class LocalId {
    readonly type = "Local";
    readonly clientId: string;
    constructor(clientId: string);
}
export declare function getStableId(id: LocalId | RemoteId): string;
