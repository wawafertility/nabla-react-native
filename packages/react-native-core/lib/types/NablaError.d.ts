export declare class NablaError extends Error {
    extra?: Map<string, any>;
    constructor(message: string, extra?: Map<string, any>);
}
export declare class NetworkError extends NablaError {
}
export declare class ServerError extends NablaError {
}
export declare class InternalError extends NablaError {
}
export declare class UnknownError extends NablaError {
}
export declare class InvalidAndroidAppThemeError extends NablaError {
}
export declare class ConfigurationError extends NablaError {
}
export declare class MissingApiKeyError extends ConfigurationError {
}
export declare class MissingAndroidContextError extends ConfigurationError {
}
export declare class MissingInitializeError extends ConfigurationError {
}
export declare class AuthenticationError extends NablaError {
}
export declare class UserIdNotSetError extends AuthenticationError {
}
export declare class AuthenticationProviderFailedToProvideTokensError extends AuthenticationError {
}
export declare class AuthenticationProviderDidProvideExpiredTokensError extends AuthenticationError {
}
export declare class AuthorizationDeniedError extends AuthenticationError {
}
export declare class FailedToRefreshTokensError extends AuthenticationError {
}
export declare class UnknownAuthenticationError extends AuthenticationError {
}
export declare class CurrentUserAlreadySetError extends AuthenticationError {
}
