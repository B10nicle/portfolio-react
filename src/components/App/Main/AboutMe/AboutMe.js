import React from "react";
import headshot from "../../../../images/headshot.jpeg";

export default function AboutMe() {
  return (
    <section className="subsection about-me">
      <div className="subsection__information">
        <h2 className="subsection__information__title title">About Me</h2>
        <p className="subsection__information__subtitle">
          Hello and welcome! My name is Oleg Khilko and I am a Software
          Developer with passion to learn everyday something new.
        </p>
      </div>
      <div className="subsection__headshot-container">
        <img className="subsection__headshot-container__headshot"
             src={headshot}
             alt="Oleg's Khilko headshot"
        />
      </div>
    </section>
  );
}
