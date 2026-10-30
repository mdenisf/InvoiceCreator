import "./App.css";
import { Footer } from "./components/Footer/Footer";
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

function App() {
    return (
        <main className="app">
            <h1>Invoice Creator</h1>
            <p>Your React project is ready.</p>
            <Footer issuer={issuer}></Footer>

        </main>
    );
}

export default App;
