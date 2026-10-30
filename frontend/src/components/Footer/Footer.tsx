import type { IssuerDetails } from "../../types/issuerTypes";
import { FooterCard } from "../FooterCard/FooterCard";

import "./Footer.css";

type footerDetails = {
    issuer: IssuerDetails;
};

export const Footer = ({ issuer }: footerDetails) => {
    let contactInformation;
    if (issuer.contactInformation.phoneNumber !== undefined)
        contactInformation = [
            issuer.contactInformation.email,
            `+${issuer.contactInformation.phoneNumber.prefix} ${issuer.contactInformation.phoneNumber.number}`,
        ];
    else contactInformation = [issuer.contactInformation.email];

    return (
        <footer className="invoice-footer">
            <FooterCard
                title={issuer.companyName}
                information={[
                    `${issuer.companyAddress.streetName} ${issuer.companyAddress.streetNumber}`,
                    `${issuer.companyAddress.postcode} ${issuer.companyAddress.city}`,
                ]}
            />
            <FooterCard title="Contact" information={contactInformation} />

            <FooterCard title="IBAN" information={[issuer.iban]} />

            <FooterCard
                title="Tax Number"
                information={[issuer.taxNumber ?? "Not given"]}
            />
        </footer>
    );
};
