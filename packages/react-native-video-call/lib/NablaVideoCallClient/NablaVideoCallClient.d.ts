import { VideoCallRoom } from '../types';
import { NablaError } from '@nabla/react-native-core';
/**
 * Main entry-point to SDK-wide features.
 */
export declare class NablaVideoCallClient {
    /**
     * Initializes the VideoCall module and register it on `NablaClient`
     * Must be called before `NablaClient.getInstance().initialize()`
     */
    static initializeVideoCallModule(): Promise<void>;
    /**
     * Join a video call room.
     * @param room the `VideoCallRoom` to join.
     * @param errorCallback The callback called in case of error.
     * @param successCallback The callback called when joined successfully.
     */
    static joinVideoCallRoom(room: VideoCallRoom, errorCallback: (error: NablaError) => void, successCallback: () => void): void;
}
