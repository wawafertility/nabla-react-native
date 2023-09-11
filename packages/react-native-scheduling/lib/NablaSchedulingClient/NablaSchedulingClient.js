import { nablaSchedulingClientModule } from './NablaSchedulingModule';
import { AppRegistry } from 'react-native';
/**
 * Main entry-point to SDK-wide features.
 */
export class NablaSchedulingClient {
    /**
     * Initializes the Scheduling module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static async initializeSchedulingModule() {
        await nablaSchedulingClientModule.initializeSchedulingModule();
    }
    static registerCustomPaymentComponent(getComponentFunc) {
        const componentName = 'NablaSchedulingPaymentStep';
        AppRegistry.registerComponent(componentName, getComponentFunc);
        nablaSchedulingClientModule.setupCustomPaymentStep(componentName);
    }
    static didSucceedPaymentStep() {
        nablaSchedulingClientModule.didSucceedPaymentStep();
    }
    static didFailPaymentStep() {
        nablaSchedulingClientModule.didFailPaymentStep();
    }
}
//# sourceMappingURL=NablaSchedulingClient.js.map