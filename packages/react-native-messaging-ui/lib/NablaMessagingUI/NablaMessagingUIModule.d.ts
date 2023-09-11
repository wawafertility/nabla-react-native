import { NativeModule } from 'react-native';
import { ConversationId } from '@nabla/react-native-messaging-core';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface NablaMessagingUIModule extends NativeModule {
    navigateToInbox(callback: Callback<void>): void;
    navigateToConversation(conversationId: ConversationId, callback: Callback<void>): void;
}
export declare const nablaMessagingUIModule: NablaMessagingUIModule;
export {};
