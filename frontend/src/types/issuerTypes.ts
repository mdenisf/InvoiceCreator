import type { Address } from "./addressType";
import type { ContactInformation } from "./contactType";

export type IssuerDetails = {
    companyName: string;
    companyAddress: Address;
    iban: string;
    taxNumber?: string;
    contactInformation: ContactInformation;
};
