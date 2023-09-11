import { AppointmentId } from "../types";
import { NablaError } from '@nabla/react-native-core';
/**
 * Main entry-point for Scheduling UI features.
 *
 * Mandatory: before any interaction with scheduling features make sure you
 * successfully authenticated your user by calling `NablaClient.getInstance().authenticate`.
 */
export declare class NablaSchedulingUI {
    /**
     * Launches the Appointment Booking Screen.
     *
     */
    static navigateToScheduleAppointmentScreen(): void;
    /**
     * Launches the AppointmentDetail Screen.
     * @param appoinmentIdId the id of the conversation to display.
     * @param errorCallback optional callback called in case of error. (Bad appointmentId)
     */
    static navigateToAppointmentDetailScreen(appoinmentId: AppointmentId, errorCallback?: (error: NablaError) => void): void;
}
