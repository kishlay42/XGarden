import React, { useState } from "react";
import "./Dark.css";

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("light-mode", !isDarkMode); // Add or remove the light-mode class
    };

    return (
        <button className="dark-mode-button" onClick={toggleDarkMode}>
            {isDarkMode ? "Dark/Light" : "Light/Dark"}
        </button>
    );
};

export default Dark;