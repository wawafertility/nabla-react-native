import { NativeModule } from 'react-native';
import { VideoCallRoom } from '../types';
import { Callback } from '@nabla/react-native-core/lib/internal';
interface NablaVideoCallClientModule extends NativeModule {
    initializeVideoCallModule(): Promise<void>;
    joinVideoCall(room: VideoCallRoom, callback: Callback<void>): void;
}
export declare const nablaVideoCallClientModule: NablaVideoCallClientModule;
export {};
