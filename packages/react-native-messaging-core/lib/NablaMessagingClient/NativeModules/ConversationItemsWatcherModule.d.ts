import { NativeModule } from 'react-native';
import { ConversationId } from '../../types';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface ConversationItemsWatcherModule extends NativeModule {
    watchConversationItems(conversationId: ConversationId, callback: Callback<void>): void;
    loadMoreItemsInConversation(conversationId: ConversationId, callback: Callback<void>): void;
    unsubscribeFromConversationItems(conversationId: ConversationId): void;
}
export declare const conversationItemsWatcherModule: ConversationItemsWatcherModule;
export {};
