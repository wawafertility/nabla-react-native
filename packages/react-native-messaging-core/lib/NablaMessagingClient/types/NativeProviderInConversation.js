import { ProviderInConversation } from '../../types';
export const mapProviderInConversation = (provider) => {
    let typingAt;
    if (provider.typingAt) {
        typingAt = new Date(provider.typingAt);
    }
    let seenUntil;
    if (provider.seenUntil) {
        seenUntil = new Date(provider.seenUntil);
    }
    return new ProviderInConversation(provider.provider, typingAt, seenUntil);
};
//# sourceMappingURL=NativeProviderInConversation.js.map