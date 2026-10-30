import type { CustomerDetails } from "../../types/customerTypes";
import type { IssuerDetails } from "../../types/issuerTypes";
import { HeaderCard } from "../HeaderCard/HeaderCard";

import "./InvoiceHeader.css";

type headerDetails = {
    issuer: IssuerDetails;
    custommer: CustomerDetails;
    invoiceNumber: string;
    date: string;
};

export const InvoiceHeader = ({
    issuer,
    custommer,
    invoiceNumber,
    date,
}: headerDetails) => {
    return (
        <header className="invoice-header">
            <HeaderCard
                title={`From:`}
                information={[issuer.companyName]}
            ></HeaderCard>
            <HeaderCard
                title={`To:`}
                information={[custommer.name ?? ""]}
            ></HeaderCard>
            <HeaderCard
                title={`Invoice:`}
                information={[invoiceNumber]}
            ></HeaderCard>
            <HeaderCard title={date}></HeaderCard>
        </header>
    );
};
