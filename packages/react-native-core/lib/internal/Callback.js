export function mergeVoid(mapError, errorCallback, successCallback) {
    return (error, result) => {
        if (error) {
            errorCallback(mapError(error));
        }
        else {
            successCallback();
        }
    };
}
export function merge(mapError, errorCallback, successCallback) {
    return (error, result) => {
        if (error) {
            errorCallback(mapError(error));
        }
        else if (result) {
            successCallback(result);
        }
    };
}
//# sourceMappingURL=Callback.js.map