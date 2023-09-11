import { ViewProps } from 'react-native';
import React from 'react';
import { ConversationId } from '@nabla/react-native-messaging-core';
export declare const NativeConversationListView: import("react-native").HostComponent<unknown>;
declare type NablaConversationListViewProps = ViewProps & {
    onConversationSelected: (conversationId: ConversationId) => void;
};
export declare const NablaConversationListView: React.FC<NablaConversationListViewProps>;
export {};
