import type { Address } from "./addressType";

export type CustomerDetails = {
    name?: string;
    companyName?:string
    address: Address;
    contactPerson?: string;
};