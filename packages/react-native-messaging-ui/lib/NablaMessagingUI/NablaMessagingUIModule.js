import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package '@nabla/react-native-messaging-ui' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo managed workflow\n';
export const nablaMessagingUIModule = NativeModules.NablaMessagingUIModule
    ? NativeModules.NablaMessagingUIModule
    : new Proxy({}, {
        get() {
            throw new Error(LINKING_ERROR);
        },
    });
//# sourceMappingURL=NablaMessagingUIModule.js.map