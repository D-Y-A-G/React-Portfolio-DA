import React from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Project from "./components/Project";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="portfolio">
      <Header />,
      <AboutMe />,
      <Project />,
      <Footer />,
      
    </div>
  );
}

export default App;
