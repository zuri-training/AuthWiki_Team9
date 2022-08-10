import SideBarCSS from "../css/SideBarCSS";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../images/icons/Logo.png";
import search from "../images/icons/search.png";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiCode } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../store/user/userSlice";

const SideBar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
                <BiBookBookmark size="30px" color="#a9a9a5" />
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
                <HiCode size="30px" color="#a9a9a5" />
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
                <CgProfile size="30px" color="#a9a9a5" />
                <NavLink
                  to="/profile"
                  className={({ isActive }) => {
                    return isActive ? "active" : "";
                  }}
                >
                  Profile
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
            <div className="btn-container">
              <button
                type="button"
                className="btn"
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle />
                {user.firstName}
                <FaCaretDown />
              </button>
              <div
                className={showLogout ? "dropdown show-dropdown" : "dropdown"}
              >
                <button
                  type="button"
                  className="dropdown-btn"
                  onClick={() => dispatch(logoutUser("Logout Successful"))}
                >
                  logout
                </button>
                <button
                  type="button"
                  style={{ borderTop: "1px solid #a9a9a5" }}
                  className="dropdown-btn"
                >
                  <Link
                    style={{ textDecoration: "none", color: " #a9a9a5" }}
                    className="profile"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </button>
              </div>
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
