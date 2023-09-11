import { NativeModule } from 'react-native';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface ConversationListWatcherModule extends NativeModule {
    loadMoreConversations(callback: Callback<void>): void;
}
export declare const conversationListWatcherModule: ConversationListWatcherModule;
export {};
