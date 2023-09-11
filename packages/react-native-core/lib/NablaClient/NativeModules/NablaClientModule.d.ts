import { NativeModule } from 'react-native';
import { NetworkConfiguration } from '../../types';
interface NablaClientModule extends NativeModule {
    initialize(apiKey: string, enableReporting: boolean, networkConfiguration?: NetworkConfiguration): Promise<void>;
    setCurrentUser(userId: string): Promise<void>;
    clearCurrentUser(): Promise<void>;
    getCurrentUserId(): Promise<string | undefined>;
    provideTokens(refreshToken: string, accessToken: string): void;
}
export declare const nablaClientModule: NablaClientModule;
export {};
