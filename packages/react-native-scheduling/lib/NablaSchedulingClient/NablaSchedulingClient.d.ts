import { ComponentProvider } from 'react-native';
/**
 * Main entry-point to SDK-wide features.
 */
export declare class NablaSchedulingClient {
    /**
     * Initializes the Scheduling module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static initializeSchedulingModule(): Promise<void>;
    static registerCustomPaymentComponent(getComponentFunc: ComponentProvider): void;
    static didSucceedPaymentStep(): void;
    static didFailPaymentStep(): void;
}
