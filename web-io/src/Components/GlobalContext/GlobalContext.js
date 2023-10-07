import React, { useState, createContext } from "react";

export const globalContext = createContext();

export const sectionType = {
    Home: 'HOME',
    Projects: 'PROJECTS',
    About: 'ABOUT',
    Contact: 'CONTACT'
}

function GlobalContext({ children }) {
  const [mode, setMode] = useState(true);
  const [section, setSection] = useState(sectionType.Home)


  const handleDarkmode = () => {
    setMode(!mode);
  };

  const handleSection = (type) => {
    setSection(type)
  }

  return (
    <globalContext.Provider value={{ mode, handleDarkmode,section, handleSection }}>
      {children}
    </globalContext.Provider>
  );
}

export default GlobalContext;
