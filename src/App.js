import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
//import Experience from "./components/experience/Experience";
//import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 ">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Banner />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
