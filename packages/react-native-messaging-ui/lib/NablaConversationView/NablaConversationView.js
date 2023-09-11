import { findNodeHandle, Platform, requireNativeComponent, StyleSheet, UIManager, } from 'react-native';
import React, { useEffect, useRef } from 'react';
export const NativeConversationView = requireNativeComponent('NablaConversationView');
const createFragment = (viewId) => UIManager.dispatchViewManagerCommand(viewId, 
// we are calling the 'create' command
// @ts-ignore
UIManager.NablaConversationView.Commands.create.toString(), [viewId]);
export const NablaConversationView = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        if (Platform.OS === 'android') {
            const viewId = findNodeHandle(ref.current);
            createFragment(viewId);
        }
    }, []);
    return (React.createElement(NativeConversationView, { style: styles.container, ref: ref, ...props }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//# sourceMappingURL=NablaConversationView.js.map