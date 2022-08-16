import styled from "styled-components";

export const GettingStartedCSS = styled.main`
  padding: 20px;
  .ul {
    list-style-type: none;
    margin: auto;
    padding: 10px;
    padding-bottom: 15px;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-evenly;
    align-items: center;
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
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .img {
    width: 100%;
    height: 100%;
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
  @media (max-width: 885px) {
    .ul {
      grid-template-columns: repeat(3, 1fr);
    }
    #div3 {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
