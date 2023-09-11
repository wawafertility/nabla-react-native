import { NativeModule } from 'react-native';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface NablaSchedulingUIModule extends NativeModule {
    navigateToScheduleAppointmentScreen(): void;
    navigateToAppointmentDetailScreen(appoinmentId: string, callbacl: Callback<void>): void;
}
export declare const nablaSchedulingUIModule: NablaSchedulingUIModule;
export {};
