import { EventSubscription } from 'react-native';
export declare class NablaEventSubscription {
    constructor(errorEventSubscription: EventSubscription, successEventSubscription: EventSubscription, cleanup?: (() => void) | undefined);
    private readonly cleanup;
    private readonly errorEventSubscription;
    private readonly successEventSubscription;
    remove(): void;
}
