import React from "react";

function Home(props) {


  return (
    <div id="picture">
      <img src={props.personalPic} alt="Personal pic" />
      <p>{props.firstName} {props.lastName}</p>
    </div>
  );
}
export default Home;
