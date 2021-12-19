import React, { useState } from "react";
import NavTabs from "../components/Home";
import Home from "./api";
import About from "../components/AboutMe";
import Projects from "../components/Portfolio";
import Contact from "../components/Form";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
//   link,
// } from "react-router-dom";

// import { About } from "../components/AboutMe";
// import { Contact } from "../components/Form";
// import { Projects } from "../components/Project";
// import { Home } from "../components/Home";

// export const Routes = () => {
//   return (
//     <div>
//       <Home />
//       <Switch>
//         <Route exact path="../homepage" component={Home} />
//         <Route exact path="/">
//           {" "}
//           <Redirect to="homepage" />
//         </Route>
//         <Route exact path="/portfolio" component={Projects} />
//         <Route exact path="/aboutMe" component={About} />
//         <Route exact path="/contact" component={Contact} />
//       </Switch>
//     </div>
//   );
// };
