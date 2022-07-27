import styled from "styled-components";

const NavBarCSS = styled.header`
  .nav {
    display: flex;
    justify-content: space-between;
    gap: 12rem;
    line-height: 17px;
    align-items: center;
    padding: 2em 0;
  }
  .nav ul {
    display: flex;
    list-style: none;
  }
  .nav .logo {
    color: #fdfef8;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
  }
  .nav ul li a {
    text-decoration: none;
    margin-right: 1em;
    color: #a9a9a5;
    text-align: center;
    font-family: "Lato";
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
  }
  .nav ul li a:hover {
    text-decoration: underline;
  }
  .nav .login {
    border-radius: 4px;
    gap: 8px;
    flex-direction: row;
  }
  .nav #signup {
    color: #04172a;
    background-color: #fdfef8;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 4px;
    order: 1;
    flex-grow: 0;
  }
`;

export default NavBarCSS;
