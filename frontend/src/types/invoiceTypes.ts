import type {CustomerDetails} from "./customerTypes"
import type {IssuerDetails} from "./issuerTypes"

type InvoiceItem = {
    description: string;
    servicePeriod: string;
    quantity?: number;
    unitPrice: string;
};

export type Invoice = {
    invoiceNumber: string;
    issuer: IssuerDetails;
    customer: CustomerDetails;
    dateOfIssue: string;
    items: InvoiceItem[];
    price: number;
    vatRate?: number;
};
