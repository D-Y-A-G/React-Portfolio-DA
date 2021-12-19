import React from "react";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
// import Contact from "./components/Form";
import AboutMe from "./components/AboutMe";
import PortfolioContainer from "./routes/PortfolioContainer"


function App() {
  return (
    <div className="portfolio">
     
      <PortfolioContainer />
    </div>
  );
}

export default App;
