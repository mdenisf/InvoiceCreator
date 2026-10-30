import "./FooterCard.css";

type FooterCardDetails = {
    title: string;
    information?: string[];
};

export const FooterCard = ({ title, information }: FooterCardDetails) => {
    return (
        <div className="footer-card">
            <strong>{title}</strong>

            {information?.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};
