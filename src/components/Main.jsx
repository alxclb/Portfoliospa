import React from "react";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

function Main({ data }) {
  let firstName = data.first_name;
  let lastName = data.last_name;
  let personalPic = data.personal_pic;
  let about = data.about;
  let experience = data.experience;
  let education = data.education;
  let skills = data.skills;
  let projects = data.projects;
  let contactInfo = data.contact_info;

  return (
    <main>
      <div id="home">
        <h1>Home // Osnovne informacije</h1>
        <div id="cv-home">
          <Home
            firstName={firstName}
            lastName={lastName}
            personalPic={personalPic}
          />
          <article id="main-article">
            <h1>Znanje i vestine</h1>
            <About about={about} />
            <Experience experience={experience} />
            <Education education={education} />
            <Skills skills={skills} />
          </article>
        </div>
      </div>
      <Projects projects={projects} />
      <Contact contactInfo={contactInfo} />
    </main>
  );
}
export default Main;
