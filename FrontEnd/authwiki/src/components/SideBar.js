import SideBarCSS from "../css/SideBarCSS";
import { Outlet, Link, NavLink } from "react-router-dom";
import book from "../images/icons/clarity_book-line.png";
import code from "../images/icons/clarity_code-line.png";
import feed from "../images/icons/fluent_broad-activity-feed-16-regular.png";
import people from "../images/icons/fluent_people-community-28-regular.png";
import star from "../images/icons/carbon_star.png";
import logo from "../images/icons/Logo.png";
import login from "../images/icons/login.png";
import search from "../images/icons/search.png";

const SideBar = () => {
  return (
    <SideBarCSS>
      <div className="main">
        <section className="left">
          <div>
            <img src={logo} alt="AuthWiki Logo" className="logo" />
          </div>
          <div className="pages">
            <ul>
              <li>
                <img src={book} alt="Getting Started" />
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  Getting Started
                </NavLink>
              </li>

              <li>
                <img src={code} alt="Language" />
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  Auth Library
                </NavLink>
              </li>
              <li>
                <img src={feed} alt="Activity Log" />
                <NavLink
                  to="/log"
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  Activity Log
                </NavLink>
              </li>
              <li>
                <img src={people} alt="Community" />
                <NavLink
                  to="/community"
                  className={({ isActive }) => {
                    return isActive ? "nav-link active" : "nav-link";
                  }}
                >
                  Community
                </NavLink>
              </li>
              <li>
                <img src={star} alt="Starred Items" />
                <NavLink
                  to="/star"
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  Starred Items
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
        <section className="right">
          <header>
            <div className="search">
              <form action="">
                <input name="Languages" type="search" placeholder="Search" />
                <button>
                  <img id="searchicon" alt="Search" src={search} />
                </button>
              </form>
            </div>
            <div className="feedback">
              <Link to="#">Feedback</Link>
              <Link to="#">Support</Link>
            </div>
            <div className="profile">
              <img alt="Profile Display" src={login} />
              <select>
                <option value="Eva Rhed">Eva Rhed</option>
              </select>
            </div>
          </header>
          <article>
            <Outlet />
          </article>
        </section>
      </div>
    </SideBarCSS>
  );
};

export default SideBar;
