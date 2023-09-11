import { NativeEventEmitter } from 'react-native';
import { nablaClientModule } from './NativeModules/NablaClientModule';
import { ConsoleLogger } from './ConsoleLogger';
import { mapCoreError } from '../internal';
import { logWatcherModule } from './NativeModules/LogWatcherModule';
const emitter = new NativeEventEmitter(nablaClientModule);
const logsEmitter = new NativeEventEmitter(logWatcherModule);
/**
 * Main entry-point to SDK-wide features.
 */
export class NablaClient {
    constructor() {
        this.logEmitterSubscription = logsEmitter.addListener('log', async (data) => {
            this.handleNativeLog(data);
        });
    }
    /**
     * Shared instance of NablaClient client to use.
     * Always call ``NablaClient.getInstance().initialize(apiKey:)`` before using it.
     */
    static getInstance() {
        if (!NablaClient.instance) {
            NablaClient.instance = new NablaClient();
        }
        return NablaClient.instance;
    }
    /**
     * NablaClient initializer, you must call this method before using `NablaClient.getInstance()`.
     * You must call this method only once.
     *
     * @param configuration Your organisation's configuration containing the API key (created online on Nabla dashboard).
     * @param provideAuthTokens `AuthTokens` provider.
     * @param logger logger used by the SDK. You can replace the default `ConsoleLogger` with your own implementation or adjust the log level using `setLogLevel`.
     * @param networkConfiguration optional network configuration, exposed for internal tests purposes and should not be used in your app.
     */
    async initialize(configuration, provideAuthTokens, networkConfiguration = undefined, logger = new ConsoleLogger()) {
        var _a;
        this.logger = logger;
        (_a = this.needProvideTokensSubscription) === null || _a === void 0 ? void 0 : _a.remove();
        this.needProvideTokensSubscription = emitter.addListener('needProvideTokens', async (data) => {
            const authTokens = await provideAuthTokens(data.userId);
            nablaClientModule.provideTokens(authTokens.refreshToken, authTokens.accessToken);
        });
        await nablaClientModule.initialize(configuration.apiKey, configuration.enableReporting, networkConfiguration);
    }
    /**
     * Authenticate the current user.
     * @param userId Identifies the user between sessions.
     * @throws CurrentUserAlreadySetError
     */
    async setCurrentUserOrThrow(userId) {
        try {
            await nablaClientModule.setCurrentUser(userId);
        }
        catch (error) {
            const promiseError = error;
            if (promiseError.code && promiseError.message) {
                throw mapCoreError({
                    code: parseInt(promiseError.code),
                    message: promiseError.message,
                });
            }
            else {
                throw error;
            }
        }
    }
    /**
     * Clear the user currently used by this SDK instance alongside all its data.
     */
    async clearCurrentUser() {
        await nablaClientModule.clearCurrentUser();
    }
    /**
     * Get the user currently used by the SDK.
     */
    async getCurrentUserId() {
        return await nablaClientModule.getCurrentUserId();
    }
    /**
     * Set the log level for the sdk logs
     * @param level the minimum logs level for the logs that are sent to the logger
     */
    setLogLevel(level) {
        logWatcherModule.setLogLevel(level);
    }
    handleNativeLog(nativeLog) {
        var _a, _b, _c, _d;
        let nablaError = nativeLog.error
            ? mapCoreError(nativeLog.error)
            : undefined;
        switch (nativeLog.level) {
            case 'debug':
                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.debug(nativeLog.tag, nativeLog.message, nablaError);
                break;
            case 'info':
                (_b = this.logger) === null || _b === void 0 ? void 0 : _b.info(nativeLog.tag, nativeLog.message, nablaError);
                break;
            case 'warn':
                (_c = this.logger) === null || _c === void 0 ? void 0 : _c.warn(nativeLog.tag, nativeLog.message, nablaError);
                break;
            case 'error':
                (_d = this.logger) === null || _d === void 0 ? void 0 : _d.error(nativeLog.tag, nativeLog.message, nablaError);
                break;
        }
    }
}
//# sourceMappingURL=NablaClient.js.map