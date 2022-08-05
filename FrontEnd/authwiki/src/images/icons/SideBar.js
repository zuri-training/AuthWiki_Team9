import SideBarCSS from "../css/SideBarCSS";
import { Outlet, Link } from "react-router-dom";

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
              <img src="images/clarity_book-line.png" alt="Getting Started" />
              <a href="start.html">Getting Started</a>
            </li>
            <li>
              <img src="images/clarity_code-line.png" alt="Language" />
              <a href="language.html">Language</a>
            </li>
            <li>
              <img
                src="images/fluent_broad-activity-feed-16-regular.png"
                alt="Activity Log"
              />
              <a href="activity.html">Activity Log</a>
            </li>
            <li>
              <img
                src="images/fluent_people-community-28-regular.png"
                alt="Community"
              />
              <a href="#community.html">Community</a>
            </li>
            <li>
              <img src="images/carbon_star.png" alt="Starred Items" />
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
