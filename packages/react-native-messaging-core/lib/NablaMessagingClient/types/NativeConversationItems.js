import { mapConversationItem, } from './NativeConversationItem';
export const mapConversationItems = (conversationItems) => ({
    hasMore: conversationItems.hasMore,
    elements: conversationItems.elements.map(mapConversationItem),
});
//# sourceMappingURL=NativeConversationItems.js.map