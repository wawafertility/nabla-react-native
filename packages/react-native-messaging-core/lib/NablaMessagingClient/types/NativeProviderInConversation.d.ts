import { Provider, ProviderInConversation } from '../../types';
export interface NativeProviderInConversation {
    provider: Provider;
    typingAt?: string;
    seenUntil?: string;
}
export declare const mapProviderInConversation: (provider: NativeProviderInConversation) => ProviderInConversation;
