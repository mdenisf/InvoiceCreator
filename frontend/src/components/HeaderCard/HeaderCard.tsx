import "./HeaderCard.css";

type HeaderCardDetails = {
    title: string;
    information?: string[];
};

export const HeaderCard = ({ title, information }: HeaderCardDetails) => {
    return (
        <div className="Header-card">
            <strong>{title}</strong>

            {information?.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};
