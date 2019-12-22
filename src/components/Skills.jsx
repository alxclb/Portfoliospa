import React from "react";

function Skills (props) {

  let data=props.skills;

  let skills=data.map((element,index)=><p key={index}>{element}</p>)

  return (
    <article className="cv-article">
      <h2>Vestine</h2>
      {skills}
    </article>
  );
}
export default Skills;
