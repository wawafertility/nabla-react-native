import { ViewProps } from 'react-native';
import React from 'react';
import { ConversationId } from '@nabla/react-native-messaging-core';
export declare const NativeConversationView: import("react-native").HostComponent<ViewProps>;
declare type NablaConversationViewProps = ViewProps & {
    conversationId: ConversationId;
};
export declare const NablaConversationView: React.FC<NablaConversationViewProps>;
export {};
