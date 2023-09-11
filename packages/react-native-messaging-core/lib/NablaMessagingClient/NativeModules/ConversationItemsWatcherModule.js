import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package '@nabla/react-native-messaging-core' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo managed workflow\n';
export const conversationItemsWatcherModule = NativeModules.ConversationItemsWatcherModule
    ? NativeModules.ConversationItemsWatcherModule
    : new Proxy({}, {
        get() {
            throw new Error(LINKING_ERROR);
        },
    });
//# sourceMappingURL=ConversationItemsWatcherModule.js.map