import React from "react";
import { SidebarCSS } from "../css/SidebarCSS";
import akar from "../icons/akar.png";
import Ellipse_17 from "../icons/Ellipse_17.png";
import Logo from "../icons/Logo.png";
import clarity_book from "../icons/clarity_book.png";
import clarity_code from "../icons/clarity_code.png";
import fluent_broad from "../icons/fluent_broad.png";
import fluent_people from "../icons/fluent_people.png";
import carbon_star from "../icons/carbon_star.png";
const Sidebar = () => {
  return (
    <SidebarCSS>
        <header>
            <div className="search">
            <form action="">
                <input name="Languages" type="search" placeholder="Search"></input>
                <button><img id="searchicon" src="{akar}"/></button>
            </form>
            </div>
        <div className="feedback">
            <a href="feedback.html">Feedback</a>
            <a href="support.html">Support</a>
        </div>
        <div className="profile">
            <img src="{Ellipse 17}"/><select><option value="Eva Rhed">Eva Rhed</option></select>
        </div>
    </header>
    <div class="main">
    <section>
        <div>
            <img src="{Logo}" alt="AuthWiki Logo" className="logo"/> 
        </div>
       <div className="pages">
        <ul>
        <li><img src="{clarity_book}" alt="Getting Started"/><a href="start.html">Getting Started</a></li>
        <li><img src="{clarity_code}" alt="Language"/><a href="language.html">Language</a></li>
        <li><img src="{fluent_broad}" alt="Activity Log"/><a href="activity.html">Activity Log</a></li>
        <li><img src="{fluent_people}" alt="Community"/><a href="#community.html">Community</a></li>
        <li><img src="{carbon_star}" alt="Starred Items"/><a href="starred.html">Starred Items</a></li>
        </ul>
        </div> 
    </section>
    <footer>
    <div class="first" id="#start">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
            <div className="first">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae excepturi laborum maiores dolores dolore, fugit temporibus reprehenderit. Illum deleniti commodi iusto quisquam, aperiam aliquid eveniet! Corporis unde molestiae veniam odit!</h1>
            </div>
        </footer>
    </div>
    </SidebarCSS>
  );
};

export default Sidebar;