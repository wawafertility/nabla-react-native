import { NativeModule } from 'react-native';
interface LogWatcherModule extends NativeModule {
    setLogLevel(level: string): void;
}
export declare const logWatcherModule: LogWatcherModule;
export {};
