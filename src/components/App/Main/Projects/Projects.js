import React from "react";
import projects from "../../../../utils/projects";
import Project from "./Project/Project";

export default function Projects() {
  for (let i = projects.length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = projects[currentIndex];
    projects[currentIndex] = projects[randomIndex];
    projects[randomIndex] = temp;
  }

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title title">Projects</h2>
      <ul className="projects__project-container" aria-label="Projects">
        {projects.map((card, index) => {
          return (
            <Project
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              link={card.link}
            />
          );
        })}
      </ul>
    </section>
  );
}
