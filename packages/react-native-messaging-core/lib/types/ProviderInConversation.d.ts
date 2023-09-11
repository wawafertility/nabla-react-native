import { Provider } from './Provider';
export declare class ProviderInConversation {
    provider: Provider;
    typingAt?: Date;
    seenUntil?: Date;
    constructor(provider: Provider, typingAt?: Date, seenUntil?: Date);
}
