import type { Address } from "./addressType";

export type CustomerDetails = {
    name: string;
    address: Address;
    contactPerson?: string;
};