import React from "react";
import "./ArrowButton.css";

const ArrowButton = ({ linkSrc }) => {
  return (
    <a
      href={linkSrc}
      target="_blank"
      rel="noopener noreferrer"
      className="arrow-button bottom-right"
    >
      <svg
        className="arrow-icon"
        viewBox="0 0 120 120"
        fill="none"
        stroke="white"
        strokeWidth="12"
        strokeLinecap="round"
      >
        {/* Long horizontal tail */}
        <line x1="20" y1="60" x2="90" y2="60" />
        {/* Arrowhead pointing EAST */}
        <line x1="75" y1="45" x2="90" y2="60" />
        <line x1="75" y1="75" x2="90" y2="60" />
      </svg>
    </a>
  );
};

export default ArrowButton;
