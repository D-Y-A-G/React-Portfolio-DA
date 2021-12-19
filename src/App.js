import React from "react";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  link,
} from "react-router-dom";
import projectCards from "./components/Project";

function App() {
  return (
    <div className="portfolio">
      <Home />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
