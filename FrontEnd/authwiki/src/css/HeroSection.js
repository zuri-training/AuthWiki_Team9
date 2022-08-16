import styled from "styled-components";

const CSS = styled.div`
  /* padding: 0 30px; */

  .hero {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 10em;
  }

  .copy {
    color: #800080;
  }
  .paste,
  .test {
    color: #fdfef8;
  }
  .icon {
    font-size: 2rem;
    margin-left: 10px;
  }

  .title-wrapper {
    border: 1px solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(to left, #2d4cf3, #94e992);
    padding: 2em 2em;
    text-align: center;
  }

  .title-wrapper h2 {
    margin: 0;
  }

  .docs-btn {
    background-color: #fdfef8;
    color: #04172a;
    padding: 0.5em 1.5em;
    text-decoration: none;
    display: block;
    font-size: 1.5em;
    border-radius: 5px;
    margin-top: 2em;
  }

  .docs-btn:hover {
    background: transparent;
    color: #fdfef8;
    transition: all 0.5s ease-out;
    border: 0.3px solid #fdfef8;
  }

  .para-container {
    margin: 3em 0;
    width: 75%;
    text-align: center;
  }
  .desc {
    color: #a9a9a5;
    font-size: 2em;
    line-height: 30px;
    text-decoration: none;
  }

  .desc a {
    color: #800080;
    text-decoration: none;
  }
  @media (max-width: 885px) {
    /* .hero {
      margin-left: 40px;
    } */
  }
`;

export default CSS;
