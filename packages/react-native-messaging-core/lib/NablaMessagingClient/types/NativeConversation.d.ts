import { Conversation, ConversationId } from '../../types';
import { NativeProviderInConversation } from './NativeProviderInConversation';
import { NativeConversationMessage } from './NativeConversationItem';
export interface NativeConversation {
    id: ConversationId;
    title?: string;
    inboxPreviewTitle: string;
    lastMessagePreview?: string;
    lastModified: string;
    patientUnreadMessageCount: number;
    providers: NativeProviderInConversation[];
    isLocked: boolean;
    pictureURL?: string;
    lastMessage?: NativeConversationMessage;
}
export declare const mapConversation: (conversation: NativeConversation) => Conversation;
