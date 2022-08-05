import React from "react";
import { GettingStartedCSS } from "../css/GettingStartedCSS";
import sample from "../images/icons/sample.png";
import cplus from "../images/icons/C++.png";
import GoLang from "../images/icons/GoLang.png";
import Csharp from "../images/icons/Csharp.png";
import JS from "../images/icons/JS.png";
import PHP from "../images/icons/PHP.png";
import Python from "../images/icons/Python.png";
import TS from "../images/icons/TS.png";

const GettingStarted = () => {
  return (
    <GettingStartedCSS>
      <div id="div1">
        <p>Get Started With Pre-Written Authentication Codes Anytime</p>
      </div>
      <div>
        <ul className="ul">
          <li className="li">
            <a href="" id="icon1">
              <img src={JS} alt="JS" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={PHP} alt="PHP" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={Python} alt="Python" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={Csharp} alt="C#" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={GoLang} alt="GoLang" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={cplus} alt="C++" />
            </a>
          </li>
          <li className="li">
            <a href="" className="icon">
              <img src={TS} alt="TS" />
            </a>
          </li>
        </ul>
      </div>

      <div id="div3">
        <div id="imgdiv">
          <img src={sample} alt="image" className="img" />
        </div>

        <div id="indiv">
          <ul className="a">
            <li>
              <span>
                <h3>Language Support</h3>
                <p>
                  Designed and built with all the love in the world by the
                  bootstrap team with the help of our contributors.
                </p>
              </span>
            </li>
          </ul>

          <ul className="b">
            <li>
              <span>
                <h3>Reliable Tested Code</h3>
                <p>
                  Designed and built with all the love in the world by the
                  bootstrap team with the help of our contributors.
                </p>
              </span>
            </li>
          </ul>

          <ul className="c">
            <li>
              <span>
                <h3>Community Support</h3>
                <p>
                  Designed and built with all the love in the world by the
                  bootstrap team with the help of our contributors.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </GettingStartedCSS>
  );
};

export default GettingStarted;
