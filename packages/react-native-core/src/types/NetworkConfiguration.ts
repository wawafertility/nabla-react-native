export class NetworkConfiguration {
  scheme: string;
  domain: string;
  port?: number;
  path: string;
  webSocketUrl?: string;

  constructor(
    scheme: string,
    domain: string,
    path: string,
    port?: number,
    webSocketUrl?: string,
  ) {
    this.scheme = scheme;
    this.domain = domain;
    this.port = port;
    this.path = path;
    this.webSocketUrl = webSocketUrl;
  }
}
