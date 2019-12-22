import React, { Fragment } from "react";

function Experience(props) {
  let data = props.experience;

  let experience = data.map((element,index) => {
    return (
      <Fragment key={index}>
        <h3>
          {element.company} {element.year}
        </h3>
        <ul>
          <span>{element.position}</span>
          {element.duties.map((x,index) => (
            <li key={index}>
              <p>{x}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  });

  return (
    <article className="cv-article">
      <h2>Radno iskustvo</h2>
      {experience}
    </article>
  );
}
export default Experience;
