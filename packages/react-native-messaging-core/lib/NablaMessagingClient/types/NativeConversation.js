import { Conversation } from '../../types';
import { mapProviderInConversation, } from './NativeProviderInConversation';
import { mapToConversationMessage, } from './NativeConversationItem';
export const mapConversation = (conversation) => {
    return new Conversation(conversation.id, conversation.inboxPreviewTitle, new Date(conversation.lastModified), conversation.patientUnreadMessageCount, conversation.providers.map(mapProviderInConversation), conversation.isLocked, conversation.title, conversation.lastMessagePreview, conversation.pictureURL, conversation.lastMessage
        ? mapToConversationMessage(conversation.lastMessage)
        : undefined);
};
//# sourceMappingURL=NativeConversation.js.map