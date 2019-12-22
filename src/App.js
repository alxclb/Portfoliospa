import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
import Person from "./components/Person";


function App() {

  return (
    <div className="App">
      <Header />
      <Main data={Person} />
      <Footer name={Person.contact_info.name}/>
    </div>
  );
}

export default App;
