import styled from "styled-components";

export const GettingStartedCSS = styled.main`
  .ul {
    overflow: hidden;
    list-style-type: none;
    justify-content: left;
    align-items: left;
    margin: auto;
    padding: 0px;
    padding-bottom: 15px;
  }

  .li {
    float: left;
  }

  #div1 {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    align-items: center;
    justify-content: center;
    width: 70%;
    line-height: 40px;
    margin: auto;
  }

  #icon1 {
    margin: 10px;
    padding: 0px;
    margin-left: 0;
  }

  .icon {
    margin: 10px;
  }

  #div3 {
    align-items: center;
    justify-content: center;
    display: block;
  }
  #imgdiv {
    width: 65%;
    float: left;
  }
  .img {
    width: 90%;
  }
  #indiv {
    width: 35%;
    float: left;
  }
  ul.a ::marker,
  ul.b ::marker,
  ul.c ::marker {
    list-style-type: circle;
    font-size: 5em;
  }

  ul.a ::marker {
    color: #e992c1;
  }

  ul.b ::marker {
    color: #dfca0e;
  }

  ul.c ::marker {
    color: #0edf23;
  }
  span {
    position: relative;
    left: -12px;
    top: -7px;
  }

  span h3 {
    font-size: 24px;
    font-weight: 500px;
  }

  span p {
    font-size: 16px;
    font-weight: 400;
    color: #a9a9a5;
  }
`;
