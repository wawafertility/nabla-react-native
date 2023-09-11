export const mapToConversationMessage = (nativeMessage) => {
    return {
        ...nativeMessage,
        createdAt: new Date(nativeMessage.createdAt),
        replyTo: nativeMessage.replyTo
            ? mapToConversationMessage(nativeMessage.replyTo)
            : undefined,
    };
};
const mapToConversationActivity = (nativeMessage) => {
    return {
        ...nativeMessage,
        createdAt: new Date(nativeMessage.createdAt),
    };
};
const mapToVideoCallRoomInteractiveMessage = (nativeMessage) => {
    return {
        ...nativeMessage,
        createdAt: new Date(nativeMessage.createdAt),
    };
};
export const mapConversationItem = (conversationItem) => {
    switch (conversationItem.type) {
        case 'ConversationActivity':
            return mapToConversationActivity(conversationItem);
        case 'ConversationMessage':
            return mapToConversationMessage(conversationItem);
        case 'VideoCallRoomInteractiveMessage':
            return mapToVideoCallRoomInteractiveMessage(conversationItem);
    }
};
//# sourceMappingURL=NativeConversationItem.js.map