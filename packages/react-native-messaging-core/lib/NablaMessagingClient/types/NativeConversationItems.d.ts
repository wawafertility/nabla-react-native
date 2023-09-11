import { NativeConversationItem } from './NativeConversationItem';
import { ConversationId, ConversationItem, PaginatedList } from '../../types';
export declare type NativeConversationItems = PaginatedList<NativeConversationItem> & {
    id: ConversationId;
};
export declare const mapConversationItems: (conversationItems: NativeConversationItems) => PaginatedList<ConversationItem>;
