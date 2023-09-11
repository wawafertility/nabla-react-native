import { NativeModule } from 'react-native';
import { ConversationId, MessageId } from '../../types';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface NablaMessagingClientModule extends NativeModule {
    initializeMessagingModule(): Promise<void>;
    startConversation(title: string | undefined, providerIds: string[] | undefined, callback: Callback<ConversationId>): void;
    createConversation(messageInput: any, title: string | undefined, providerIds: string[] | undefined, callback: Callback<ConversationId>): void;
    sendMessage(input: any, conversationId: ConversationId, replyTo: MessageId | undefined, callback: Callback<void>): void;
    retrySendingMessage(messageId: MessageId, conversationId: ConversationId, callback: Callback<void>): void;
    deleteMessage(messageId: MessageId, conversationId: ConversationId, callback: Callback<void>): void;
    markConversationAsSeen(conversationId: ConversationId, callback: Callback<void>): void;
    setIsTyping(isTyping: boolean, conversationId: ConversationId, callback: Callback<void>): void;
}
export declare const nablaMessagingClientModule: NablaMessagingClientModule;
export {};
