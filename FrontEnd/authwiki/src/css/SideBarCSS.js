import styled from "styled-components";

const SideBarCSS = styled.div`
  /* Dashboard Navigation Bar */
  .main {
    display: flex;
    flex-direction: row;
  }
  header {
    position: fixed;
    padding: 52px 720px;
    background-color: #04172a;
  }
  header div {
    display: flex;
  }
  .logo {
    position: absolute;
    width: 120px;
    height: 68.86px;
    left: 76px;
    top: 18px;
  }
  .search form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
    position: absolute;
    left: 335px;
    top: 27px;
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
    position: absolute;
    top: 12px;
    right: 7px;
    border: 2px solid #d3d4cf;
  }
  .search form button {
    border: 0;
  }
  header .feedback {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 883px;
    top: 28px;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 4px;
    position: absolute;
    top: 28px;
    left: 1214px;
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
  section {
    background-color: #04172a;
    border-right: 1px solid #052a4f;
    position: fixed;
    width: 293px;
    height: 100%;
    left: 0px;
    top: 1px;
  }
  .pages {
    position: absolute;
    width: 136px;
    height: 236px;
    left: 78px;
    top: 194px;
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
  /* Content - Outlier*/
  footer {
    margin: 6em 4em 2em 22em;
  }
`;

export default SideBarCSS;
