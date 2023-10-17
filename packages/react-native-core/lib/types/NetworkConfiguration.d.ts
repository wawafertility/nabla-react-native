export declare class NetworkConfiguration {
    scheme: string;
    domain: string;
    port?: number;
    path: string;
    webSocketUrl?: string;
    constructor(scheme: string, domain: string, path: string, port?: number, webSocketUrl?: string);
}
