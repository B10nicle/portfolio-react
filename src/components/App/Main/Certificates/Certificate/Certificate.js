import React from "react";

export default function Certificate(card) {
  return (
    <img
      className="certificates__card__item"
      src={card.image}
      alt={card.title}
    />
  );
}
