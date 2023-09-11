import { NablaError } from '@nabla/react-native-core';
export declare class MessagingError extends NablaError {
}
export declare class InvalidMessageError extends MessagingError {
}
export declare class MessageNotFoundError extends MessagingError {
}
export declare class CannotReadFileDataError extends MessagingError {
}
export declare class ProviderNotFoundError extends MessagingError {
}
export declare class ProviderMissingPermissionError extends MessagingError {
}
export declare class MissingConversationIdError extends MessagingError {
}
