import { NativeError } from './NativeError';
export declare type Callback<T> = (error: NativeError | undefined, result: T | undefined) => void;
export declare function mergeVoid<Error>(mapError: (error: NativeError) => Error, errorCallback: (error: Error) => void, successCallback: () => void): Callback<void>;
export declare function merge<Success, Error>(mapError: (error: NativeError) => Error, errorCallback: (error: Error) => void, successCallback: (result: Success) => void): Callback<Success>;
