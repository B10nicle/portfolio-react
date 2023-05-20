import React from "react";
import Logo from "./Logo/Logo";
import NavigationList from "./NavigationList/NavigationList";

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <NavigationList/>
    </header>
  );
}
