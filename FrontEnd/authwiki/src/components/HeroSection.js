import React from "react";
import '../css/HeroSection.css'

const HeroSection = () => {
  return(
    <div className="hero">
        <div className="title-wrapper">
            <h2 className="title copy">Copy.</h2>
            <h2 className="title paste">Paste.</h2>
            <h2 className="title test">Test.</h2>
        </div>
        <a href="#" className="docs-btn">Documentation</a>
            <div className='para-container'>
                <p className='desc'><a href='#'>Authlt</a> combines the best developer experience with an obsessive focus on end-user performance. <span>Our paltform enables frontend teams to do their best work.</span></p>
            </div>
    </div>
)
};

export default HeroSection;
