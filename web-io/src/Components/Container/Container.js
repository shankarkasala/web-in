import React, { useContext } from "react";
import "./container.css";
import { globalContext, sectionType } from "../GlobalContext/GlobalContext";
import Home from "../Home/Home";
import About from "./../About/About";
import Projects from "./../Projects/Projects";
import Contact from "./../Contact/Contact";

function Container() {
  const { section } = useContext(globalContext);

  const renderContainer = () => {
    switch (section) {
      case sectionType.Home:
        return <Home />;
      case sectionType.About:
        return <About />;
      case sectionType.Projects:
        return <Projects />;
      case sectionType.Contact:
        return <Contact />;

      default:
        break;
    }
  };
  return <div>{renderContainer()}</div>;
}

export default Container;
