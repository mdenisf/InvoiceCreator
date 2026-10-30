export type ContactInformation = {
    email: string;
    phoneNumber?: {
        prefix: string;
        number: string;
    };
};
