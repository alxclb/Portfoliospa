import React from "react";

function Header() {
  return (
    <header>
      <nav id="fixed-nav">
        <a href="#home">
          <button type="button">HOME</button>
        </a>
        <a href="#project">
          <button type="button">PROJECTS</button>
        </a>
        <a href="#contact">
          <button type="button">CONTACT</button>
        </a>
      </nav>
    </header>
  );
}
export default Header;
