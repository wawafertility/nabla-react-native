import { nablaSchedulingUIModule } from './NablaSchedulingUIModule';
import { mapError } from '@nabla/react-native-messaging-core/lib/internal';
import { mergeVoid } from '@nabla/react-native-core/lib/internal';
/**
 * Main entry-point for Scheduling UI features.
 *
 * Mandatory: before any interaction with scheduling features make sure you
 * successfully authenticated your user by calling `NablaClient.getInstance().authenticate`.
 */
export class NablaSchedulingUI {
    /**
     * Launches the Appointment Booking Screen.
     *
     */
    static navigateToScheduleAppointmentScreen() {
        nablaSchedulingUIModule.navigateToScheduleAppointmentScreen();
    }
    /**
     * Launches the AppointmentDetail Screen.
     * @param appoinmentIdId the id of the conversation to display.
     * @param errorCallback optional callback called in case of error. (Bad appointmentId)
     */
    static navigateToAppointmentDetailScreen(appoinmentId, errorCallback = () => { }) {
        nablaSchedulingUIModule.navigateToAppointmentDetailScreen(appoinmentId, mergeVoid(mapError, errorCallback, () => { }));
    }
}
//# sourceMappingURL=NablaSchedulingUI.js.map