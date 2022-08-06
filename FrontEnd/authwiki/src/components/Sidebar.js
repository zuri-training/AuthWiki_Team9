import SideBarCSS from "../css/SideBarCSS";
import { Outlet, Link } from "react-router-dom";
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
      <div>
        <header>
          <div className="search">
            <form action="">
              <input name="Languages" type="search" placeholder="Search" />
              <button>
                <img id="searchicon" src={search} />
              </button>
            </form>
          </div>
          <div className="feedback">
            <Link to="#">Feedback</Link>
            <Link to="#">Support</Link>
          </div>
          <div className="profile">
            <img src={login} />
            <select>
              <option value="Eva Rhed">Eva Rhed</option>
            </select>
          </div>
        </header>
        <Outlet />
      </div>

      <section>
        <div>
          <img src={logo} alt="AuthWiki Logo" className="logo" />
        </div>
        <div className="pages">
          <ul>
            <li>
              <img src={book} alt="Getting Started" />
              <Link to="#">Getting Started</Link>
            </li>
            <li>
              <img src={code} alt="Language" />
              <Link to="#">Language</Link>
            </li>
            <li>
              <img src={feed} alt="Activity Log" />
              <Link to="#">Activity Log</Link>
            </li>
            <li>
              <img src={people} alt="Community" />
              <Link to="#">Community</Link>
            </li>
            <li>
              <img src={star} alt="Starred Items" />
              <Link to="#">Starred Items</Link>
            </li>
          </ul>
        </div>
      </section>
    </SideBarCSS>
  );
};

export default SideBar;
