"use client";
import React, { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";

export default function ThemeToggle () {
    const {darkMode,toggleTheme}= useContext(ThemeContext);

    return(
        <div className={darkMode ? "bg-black text-white p-10" : "bg-white text-black p-5"}>
            {/*Show current theme */}
   <p>Current Theme: {darkMode ? "Dark" : "Light"}</p>

      {/* 3️⃣ Button to toggle theme */}
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleTheme} 
      >
        Toggle Theme
      </button>
    </div>
  );
}