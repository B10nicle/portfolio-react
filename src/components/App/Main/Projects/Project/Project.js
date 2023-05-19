import React from "react";

export default function Project(card) {
  return (
    <div className="projects__project-card">
      <a
        className="projects__project-card__link link_black"
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="projects__project-card__image"
          src={card.image}
          alt={card.title}
        />
        <h2 className="projects__project-card__title">{card.title}</h2>
        <p className="projects__project-card__subtitle">{card.subtitle}</p>
      </a>
    </div>
  );
}
