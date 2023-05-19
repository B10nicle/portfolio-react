import React from "react";
import certificates from "../../../../utils/certificates";
import Certificate from "./Certificate/Certificate";

export default function Certificates() {
  for (let i = certificates.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = certificates[currentIndex];
    certificates[currentIndex] = certificates[randomIndex];
    certificates[randomIndex] = temp;
  }

  return (
    <section className="certificates">
      <h2 className="certificates__title title">Certificates</h2>
      <ul className="certificates__cards" aria-label="Certificates">
        {certificates.map((card, index) => {
          return (
            <Certificate
              key={index}
              title={card.title}
              image={card.image}
            />
          );
        })}
      </ul>
    </section>
  );
}
