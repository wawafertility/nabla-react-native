import { nablaVideoCallClientModule } from './NablaVideoCallClientModule';
import { mapCoreError, mergeVoid } from '@nabla/react-native-core/lib/internal';
/**
 * Main entry-point to SDK-wide features.
 */
export class NablaVideoCallClient {
    /**
     * Initializes the VideoCall module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static async initializeVideoCallModule() {
        await nablaVideoCallClientModule.initializeVideoCallModule();
    }
    /**
     * Join a video call room.
     * @param room the `VideoCallRoom` to join.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when joined successfully.
     */
    static joinVideoCallRoom(room, errorCallback, successCallback) {
        nablaVideoCallClientModule.joinVideoCall(room, mergeVoid(mapCoreError, errorCallback, successCallback));
    }
}
//# sourceMappingURL=NablaVideoCallClient.js.map