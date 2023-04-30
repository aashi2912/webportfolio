import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4 ">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Banner />
      </div>
    </div>
  );
}

export default App;
