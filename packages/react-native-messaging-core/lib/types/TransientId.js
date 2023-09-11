export class RemoteId {
    constructor(remoteId, clientId = undefined) {
        this.type = 'Remote';
        this.clientId = clientId;
        this.remoteId = remoteId;
    }
}
export class LocalId {
    constructor(clientId) {
        this.type = 'Local';
        this.clientId = clientId;
    }
}
export function getStableId(id) {
    switch (id.type) {
        case 'Remote':
            return id.remoteId;
        case 'Local':
            return id.clientId;
    }
}
//# sourceMappingURL=TransientId.js.map