import React from "react";
import project from "../data/project.jpg";

function Projects(props) {
  let data = props.projects;

  let projects = data.map((element, index) => (
    <div className="pic-projects" key={index}>
      <a href="#">
        <img src={project} alt={element.project_title} />
      </a>
      <p>Naziv {element.project_title}</p>
    </div>
  ));

  return (
    <div id="project">
      <h1>Projects // Porfolio projekata</h1>
      <div id="port">{projects}</div>
    </div>
  );
}
export default Projects;
