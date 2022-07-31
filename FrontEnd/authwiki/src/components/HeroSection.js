import React from "react";
import "../css/HeroSection.css";
import { FaSquareFull } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="title-wrapper">
        <h2 className="title copy">
          Copy
          <FaSquareFull className="icon" />
        </h2>
        <h2 className="title paste">
          Paste
          <FaSquareFull className="icon" />
        </h2>
        <h2 className="title test">
          Test
          <FaSquareFull className="icon" />
        </h2>
      </div>
      <a href="#" className="docs-btn">
        Documentation
      </a>
      <div className="para-container">
        <p className="desc">
          <a href="#">AuthWiki</a> combines the best developer experience with
          an obsessive focus on end-user performance.{" "}
          <span>
            Our paltform enables frontend teams to do their best work.
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
