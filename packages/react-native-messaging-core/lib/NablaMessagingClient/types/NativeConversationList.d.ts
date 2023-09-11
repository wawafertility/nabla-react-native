import { NativeConversation } from './NativeConversation';
import { Conversation, PaginatedList } from '../../types';
export declare type NativeConversationList = PaginatedList<NativeConversation>;
export declare const mapConversationList: (conversationList: NativeConversationList) => PaginatedList<Conversation>;
