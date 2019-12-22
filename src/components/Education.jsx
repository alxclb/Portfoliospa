import React from "react";

function Education(props) {

let data=props.education;

let education=data.map((element,index)=><ul key={index}><span>{element.school_name}</span><li>{element.title}</li></ul>)

  return (
    <article className="cv-article">
      <h2>Obrazovanje</h2>
      {education}
    </article>
  );
}
export default Education;
