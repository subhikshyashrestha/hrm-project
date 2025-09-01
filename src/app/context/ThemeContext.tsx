"use client";

import React, {createContext,useState,ReactNode} from "react";
export const ThemeContext = createContext({
    darkMode : false,
    toggleTheme: () => {}
});

export const ThemeProvider = ({children } : {children : ReactNode}) => {
    const [darkMode,setDarkMode ] = useState(false);
    const toggleTheme = () => setDarkMode(!darkMode);

    return(
         <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}  
    </ThemeContext.Provider>
  );
};
    
