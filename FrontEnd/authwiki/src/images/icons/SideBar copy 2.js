import SideBarCSS from "../css/SideBarCSS";
import { Outlet, Link } from "react-router-dom";
import book from "../images/icons/clarity_book-line.png";
import code from "../images/icons/clarity_code-line.png";
import feed from "../images/icons/fluent_broad-activity-feed-16-regular.png";
import people from "../images/icons/fluent_people-community-28-regular.png";
import star from "../images/icons/carbon_star.png";

const SideBar = () => {
  return (
    <SideBarCSS>
      <header>
        <div className="search">
          <form action="">
            <input name="Languages" type="search" placeholder="Search" />
            <button>
              <img id="searchicon" src="images/akar-icons_search.png" />
            </button>
          </form>
        </div>
        <div className="feedback">
          <a href="feedback.html">Feedback</a>
          <a href="support.html">Support</a>
        </div>
        <div className="profile">
          <img src="images/Ellipse 17.png" />
          <select>
            <option value="Eva Rhed">Eva Rhed</option>
          </select>
        </div>
      </header>
      <section>
        <div>
          <img src="images/Logo.png" alt="AuthWiki Logo" className="logo" />
        </div>
        <div className="pages">
          <ul>
            <li>
              <img src={book} alt="Getting Started" />
              <a href="start.html">Getting Started</a>
            </li>
            <li>
              <img src={code} alt="Language" />
              <a href="language.html">Language</a>
            </li>
            <li>
              <img src={feed} alt="Activity Log" />
              <a href="activity.html">Activity Log</a>
            </li>
            <li>
              <img src={people} alt="Community" />
              <a href="#community.html">Community</a>
            </li>
            <li>
              <img src={star} alt="Starred Items" />
              <a href="starred.html">Starred Items</a>
            </li>
          </ul>
        </div>
      </section>
      <Outlet />
    </SideBarCSS>
  );
};

export default SideBar;
