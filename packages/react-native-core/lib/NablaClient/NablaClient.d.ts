import { AuthTokens, Configuration, LogLevel, NetworkConfiguration } from '../types';
import { Logger } from './Logger';
/**
 * Main entry-point to SDK-wide features.
 */
export declare class NablaClient {
    private static instance;
    private logEmitterSubscription?;
    private needProvideTokensSubscription?;
    private logger?;
    private constructor();
    /**
     * Shared instance of NablaClient client to use.
     * Always call ``NablaClient.getInstance().initialize(apiKey:)`` before using it.
     */
    static getInstance(): NablaClient;
    /**
     * NablaClient initializer, you must call this method before using `NablaClient.getInstance()`.
     * You must call this method only once.
     *
     * @param configuration Your organisation's configuration containing the API key (created online on Nabla dashboard).
     * @param provideAuthTokens `AuthTokens` provider.
     * @param logger logger used by the SDK. You can replace the default `ConsoleLogger` with your own implementation or adjust the log level using `setLogLevel`.
     * @param networkConfiguration optional network configuration, exposed for internal tests purposes and should not be used in your app.
     */
    initialize(configuration: Configuration, provideAuthTokens: (userId: string) => Promise<AuthTokens>, networkConfiguration?: NetworkConfiguration | undefined, logger?: Logger): Promise<void>;
    /**
     * Authenticate the current user.
     * @param userId Identifies the user between sessions.
     * @throws CurrentUserAlreadySetError
     */
    setCurrentUserOrThrow(userId: string): Promise<void>;
    /**
     * Clear the user currently used by this SDK instance alongside all its data.
     */
    clearCurrentUser(): Promise<void>;
    /**
     * Get the user currently used by the SDK.
     */
    getCurrentUserId(): Promise<string | undefined>;
    /**
     * Set the log level for the sdk logs
     * @param level the minimum logs level for the logs that are sent to the logger
     */
    setLogLevel(level: LogLevel): void;
    private handleNativeLog;
}
