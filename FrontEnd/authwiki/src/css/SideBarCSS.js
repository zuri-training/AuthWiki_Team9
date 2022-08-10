import styled from "styled-components";

const SideBarCSS = styled.div`
  /* Dashboard Navigation Bar */

  .main {
    display: grid;
    grid-template-columns: 20% 80%;
    padding-top: 5rem;
    height: 100vh;
  }
  header {
    display: flex;
    justify-content: space-around;
  }
  header div {
    display: flex;
  }
  .logo {
    width: 120px;
    height: 68.86px;
    margin-bottom: 3rem;
  }
  .search form {
    display: flex;
    padding: 0px;
  }
  .search input {
    width: 466px;
    height: 50px;
    border: 1px solid #052a4fbf;
    background-color: #04172a;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    text-indent: 1em;
  }
  #searchicon {
    border: 2px solid #d3d4cf;
  }
  .search form button {
    border: 0;
  }
  header .feedback {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
  }
  header .feedback a {
    padding: 10px 20px;
    border: 1px solid #04172a;
    border-radius: 8px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #a9a9a5;
    text-decoration: none;
  }
  header .feedback a:hover {
    border: 1px solid #052a4f;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
  }
  .profile select {
    background-color: #04172a;
    border: 1px solid #04172a;
    text-align: left;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #a9a9a5;
  }

  /* Side Bar */
  .left {
    border-right: 4px solid #052a4f;
    padding-top: 10rem;
  }
  .right {
    overflow: scroll;
  }
  .pages {
  }
  .pages ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 15px;
    list-style: none;
  }
  .pages ul li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 6px;
  }
  .pages ul li a {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
    color: #a9a9a5;
    text-decoration: none;
    cursor: pointer;
  }
  a::after {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0em;
    text-align: left;
    color: #fdfef8;
  }
  article {
    margin: 20px;
  }
  .active:link,
  .active:visited {
    color: white;
  }
  .btn-container {
    position: relative;
    color: #a9a9a5;
    font-size: 16px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: none;
    background-color: #04172a;
    color: #a9a9a5;
  }
  .dropdown {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background: #052a4f;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: 0.25rem;
  }
  .show-dropdown {
    visibility: visible;
    display: flex;
    flex-direction: column;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: #a9a9a5;
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default SideBarCSS;
