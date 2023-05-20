import React from "react";
import Header from "./Header/Header";
import HeroArea from "./HeroArea/HeroArea";

export default function Hero() {
  return (
    <section className="hero">
      <Header/>
      <HeroArea/>
    </section>
  );
}
