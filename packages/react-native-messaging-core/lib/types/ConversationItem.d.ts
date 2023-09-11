import { MessageId, Provider } from './index';
export declare type MaybeProvider = {
    type: 'DeletedProvider';
} | {
    type: 'Provider';
    provider: Provider;
};
export declare type ConversationActivity = {
    id: string;
    type: 'ConversationActivity';
    createdAt: Date;
    activity: {
        type: 'ProviderJoined';
        maybeProvider: MaybeProvider;
    };
};
export declare type VideoCallRoom = {
    id: string;
    token: string;
    url: string;
};
export declare type VideoCallRoomInteractiveMessage = {
    id: string;
    type: 'VideoCallRoomInteractiveMessage';
    createdAt: Date;
    sender: ConversationItemSender;
    videoCallRoomInteractiveMessage: {
        status: 'closed';
    } | {
        status: 'open';
        room: VideoCallRoom;
    };
};
declare type DeletedMessageItemContent = {
    type: 'DeletedMessageItem';
};
declare type TextMessageItemContent = {
    type: 'TextMessageItem';
    text: string;
};
declare type MediaContent = {
    type: 'url';
    fileURL: string;
} | {
    type: 'base64Data';
    data: string;
};
declare type Media = {
    fileName: string;
    mimeType: string;
    content: MediaContent;
};
declare type MediaSize = {
    width: number;
    height: number;
};
declare type ImageMessageItemContent = {
    type: 'ImageMessageItem';
    image: Media & {
        size: MediaSize | undefined;
    };
};
declare type VideoMessageItemContent = {
    type: 'VideoMessageItem';
    video: Media & {
        size: MediaSize | undefined;
    };
};
declare type AudioMessageItemContent = {
    type: 'AudioMessageItem';
    audio: Media & {
        durationMs: number | undefined;
    };
};
declare type DocumentMessageItemContent = {
    type: 'DocumentMessageItem';
    document: Media & {
        thumbnailURL: string;
    };
};
export declare type ConversationMessageContent = DeletedMessageItemContent | TextMessageItemContent | ImageMessageItemContent | VideoMessageItemContent | AudioMessageItemContent | DocumentMessageItemContent;
export declare type ConversationItemSender = {
    type: 'Me';
} | {
    type: 'Patient';
    patient: {
        id: string;
        displayName: string;
    };
} | {
    type: 'Provider';
    provider: Provider;
} | {
    type: 'System';
    system: {
        name: string;
        avatarURL: string | undefined;
    };
} | {
    type: 'Deleted';
} | {
    type: 'Unknown';
};
export declare type ConversationMessage = {
    id: MessageId;
    type: 'ConversationMessage';
    createdAt: Date;
    sender: ConversationItemSender;
    sendingState: 'sent' | 'toBeSent' | 'sending' | 'failed';
    replyTo: ConversationMessage | undefined;
    content: ConversationMessageContent;
};
export declare type ConversationItem = ConversationActivity | ConversationMessage | VideoCallRoomInteractiveMessage;
export {};
