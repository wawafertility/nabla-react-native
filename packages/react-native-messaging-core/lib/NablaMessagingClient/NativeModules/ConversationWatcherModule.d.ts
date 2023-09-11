import { NativeModule } from 'react-native';
import { ConversationId } from '../../types';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface ConversationWatcherModule extends NativeModule {
    watchConversation(conversationId: ConversationId, callback: Callback<void>): void;
    unsubscribeFromConversation(conversationId: ConversationId): void;
}
export declare const conversationWatcherModule: ConversationWatcherModule;
export {};
