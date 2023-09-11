import { NativeModule } from 'react-native';
interface NablaSchedulingClientModule extends NativeModule {
    initializeSchedulingModule(): Promise<void>;
    setupCustomPaymentStep(componentName: string): void;
    didSucceedPaymentStep(): void;
    didFailPaymentStep(): void;
}
export declare const nablaSchedulingClientModule: NablaSchedulingClientModule;
export {};
