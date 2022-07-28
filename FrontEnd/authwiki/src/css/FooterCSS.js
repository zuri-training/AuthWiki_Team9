import styled from "styled-components";

const FooterCSS = styled.footer`
  font-weight: 400;
  font-size: 16px;
  color: #a9a9a5;

  .head {
    font-size: 18px;
    color: #fff;
  }
  .grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 20px;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
  }
  .grid a {
    text-decoration: none;
    color: #a9a9a5;
  }
  .grid ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .copyrights {
    display: flex;
    gap: 50px;
    margin-top: 90px;
    margin-bottom: 20px;
  }
  .socials {
    display: flex;
    gap: 20px;
  }
`;

export default FooterCSS;
