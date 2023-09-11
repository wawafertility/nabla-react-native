import { ConversationItem, ConversationMessage, ConversationItemSender, MaybeProvider, ConversationMessageContent, MessageId, VideoCallRoom } from '../../types';
export declare type NativeConversationItem = NativeConversationActivity | NativeConversationMessage | NativeVideoCallRoomInteractiveMessage;
export declare type NativeConversationActivity = {
    id: string;
    type: 'ConversationActivity';
    createdAt: string;
    activity: {
        type: 'ProviderJoined';
        maybeProvider: MaybeProvider;
    };
};
export declare type NativeConversationMessage = {
    id: MessageId;
    type: 'ConversationMessage';
    createdAt: string;
    sender: ConversationItemSender;
    sendingState: 'sent' | 'toBeSent' | 'sending' | 'failed';
    replyTo: NativeConversationMessage | undefined;
    content: ConversationMessageContent;
};
export declare type NativeVideoCallRoomInteractiveMessage = {
    id: string;
    type: 'VideoCallRoomInteractiveMessage';
    createdAt: string;
    sender: ConversationItemSender;
    videoCallRoomInteractiveMessage: {
        status: 'closed';
    } | {
        room: VideoCallRoom;
        status: 'open';
    };
};
export declare const mapToConversationMessage: (conversationMessage: NativeConversationMessage) => ConversationMessage;
export declare const mapConversationItem: (conversationItem: NativeConversationItem) => ConversationItem;
