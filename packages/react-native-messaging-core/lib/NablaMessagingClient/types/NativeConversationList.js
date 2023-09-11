import { mapConversation } from './NativeConversation';
export const mapConversationList = (conversationList) => ({
    elements: conversationList.elements.map(mapConversation),
    hasMore: conversationList.hasMore,
});
//# sourceMappingURL=NativeConversationList.js.map