import React from "react";
import "../css/HeroSection.css";
import { FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="title-wrapper">
        <h2 className="title copy">
          Discover
          <FaSquareFull className="icon" />
        </h2>
        <h2 className="title paste">
          Copy
          <FaSquareFull className="icon" />
        </h2>
        <h2 className="title test">
          Build
          <FaSquareFull className="icon" />
        </h2>
        <h2 className="title copy">
          Interact
          <FaSquareFull className="icon" />
        </h2>
      </div>
      <Link to="/allauthlib" className="docs-btn">
        View Authentication libraries
      </Link>
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
