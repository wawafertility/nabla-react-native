export declare type Location = {
    type: 'Physical';
} | {
    type: 'Remote';
} | {
    type: 'Unknown';
};
export declare type Provider = {
    id: string;
    prefix: string | undefined;
    firstName: string;
    lastName: string;
    title: string;
    avatarURL: string;
};
export declare type Price = {
    amount: number;
    currencyCode: string;
};
export declare type Appointment = {
    id: string;
    scheduledAt: string;
    provider: Provider;
    location: Location;
    price: Price | undefined;
};
