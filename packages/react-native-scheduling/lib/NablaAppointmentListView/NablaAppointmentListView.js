import React, { useEffect, useRef } from 'react';
import { findNodeHandle, Platform, StyleSheet, UIManager } from "react-native";
import { NablaAppointmentListViewManager } from './NablaAppointmentListViewManager';
const createFragment = (viewId) => UIManager.dispatchViewManagerCommand(viewId, 
// we are calling the 'create' command
// @ts-ignore
UIManager.NablaAppointmentListView.Commands.create.toString(), [viewId]);
export const NablaAppointmentListView = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            if (Platform.OS === 'android') {
                const viewId = findNodeHandle(ref.current);
                createFragment(viewId);
            }
        });
    }, []);
    const nativeProps = {
        ...props,
        onAppointmentSelected: (event) => {
            props.onAppointmentSelected(event.nativeEvent.appointmentId);
        },
    };
    return (React.createElement(NablaAppointmentListViewManager, { style: styles.container, ref: ref, ...nativeProps }));
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
//# sourceMappingURL=NablaAppointmentListView.js.map