import "./App.css";
import { InvoiceFooter } from "./components/InvoiceFooter/InvoiceFooter";
import { InvoiceHeader } from "./components/InvoiceHeader/InvoiceHeader";
import type { CustomerDetails } from "./types/customerTypes";
import type { IssuerDetails } from "./types/issuerTypes";

const issuer: IssuerDetails = {
    companyName: "Company",
    companyAddress: {
        streetName: "Example Street",
        streetNumber: "4",
        postcode: "54290",
        city: "Trier",
    },
    iban: "ABC",
    contactInformation: {
        email: "myemail@example.com",
        phoneNumber: { number: "01234556", prefix: "41" },
    },
};
const custommer: CustomerDetails = {
    name: "Custommer",
    address: {
        streetName: "Custommer street",
        streetNumber: "12",
        postcode: "55555",
        city: "Berlin",
    },
};

function App() {
    return (
        <main className="app">
            <h1>Invoice Creator</h1>
            <p>Your React project is ready.</p>
            <InvoiceHeader
                issuer={issuer}
                custommer={custommer}
                date="10-10-2026"
                invoiceNumber="123"
            ></InvoiceHeader>
            <InvoiceFooter issuer={issuer}></InvoiceFooter>
        </main>
    );
}

export default App;
