import React from 'react';
import { ViewProps } from "react-native";
import { AppointmentId } from '../types';
declare type NablaAppointmentListViewProps = ViewProps & {
    onAppointmentSelected: (appointmentId: AppointmentId) => void;
};
export declare const NablaAppointmentListView: React.FC<NablaAppointmentListViewProps>;
export {};
