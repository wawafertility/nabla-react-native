import { requireNativeComponent, } from 'react-native';
import React from 'react';
export const NativeConversationListView = requireNativeComponent('NablaConversationListView');
export const NablaConversationListView = (props) => {
    const nativeProps = {
        ...props,
        onConversationSelected: (event) => {
            props.onConversationSelected(event.nativeEvent.conversationId);
        },
    };
    return React.createElement(NativeConversationListView, { ...nativeProps });
};
//# sourceMappingURL=NablaConversationListView.js.map