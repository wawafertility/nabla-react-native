export declare type RefreshingState<Error> = {
    type: 'Refreshing';
} | {
    type: 'Refreshed';
} | {
    type: 'ErrorWhileRefreshing';
    error: Error;
};
export declare type Response<Data, Error> = {
    isDataFresh: boolean;
    refreshingState: RefreshingState<Error>;
    data: Data;
};
