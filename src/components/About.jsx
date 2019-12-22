import React from "react";

function About(props) {
  let article = props.about;
  return (
    <article className="cv-article">
      <h2>Osobine</h2>
      <p>{article}</p>
    </article>
  );
}
export default About;
