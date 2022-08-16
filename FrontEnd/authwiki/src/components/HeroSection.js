import React from "react";
import CSS from "../css/HeroSection.js";
import { FaSquareFull } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <CSS>
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
        <Link to="/library" className="docs-btn">
          View Authentication libraries
        </Link>
        <div className="para-container">
          <p className="desc">
            <Link to="library">AuthWiki</Link> combines the best developer
            experience with an obsessive focus on end-user performance.
            <span>
              Our platform enables frontend teams to do their best work.
            </span>
          </p>
        </div>
      </div>
    </CSS>
  );
};

export default HeroSection;
