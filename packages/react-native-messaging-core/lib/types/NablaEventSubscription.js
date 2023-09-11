export class NablaEventSubscription {
    constructor(errorEventSubscription, successEventSubscription, cleanup = undefined) {
        this.errorEventSubscription = errorEventSubscription;
        this.successEventSubscription = successEventSubscription;
        this.cleanup = cleanup;
    }
    remove() {
        this.errorEventSubscription.remove();
        this.successEventSubscription.remove();
        if (this.cleanup) {
            this.cleanup();
        }
    }
}
//# sourceMappingURL=NablaEventSubscription.js.map