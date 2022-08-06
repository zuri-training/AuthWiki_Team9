import styled from "styled-components";

const SideBarCSS = styled.div`
  /* Dashboard Navigation Bar */
  .main {
    display: grid;
    grid-template-columns: 20% 80%;
    padding-top: 5rem;
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
  .pages {
  }
  .pages ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px;
    gap: 29px;
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
    font-size: 16px;
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
`;

export default SideBarCSS;
