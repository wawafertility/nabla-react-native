import { mapError } from './errorMapper';
function mapRefreshingState(refreshingState) {
    switch (refreshingState.type) {
        case 'Refreshing':
        case 'Refreshed':
            return refreshingState;
        case 'ErrorWhileRefreshing':
            return {
                type: refreshingState.type,
                error: mapError(refreshingState.error),
            };
    }
}
export function mapResponse(nativeResponse, transform) {
    return {
        isDataFresh: nativeResponse.isDataFresh,
        refreshingState: mapRefreshingState(nativeResponse.refreshingState),
        data: transform(nativeResponse.data),
    };
}
//# sourceMappingURL=ResponseMapper.js.map