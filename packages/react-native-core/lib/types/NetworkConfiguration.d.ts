export declare class NetworkConfiguration {
    scheme: string;
    domain: string;
    port?: number;
    path: string;
    constructor(scheme: string, domain: string, path: string, port?: number);
}
