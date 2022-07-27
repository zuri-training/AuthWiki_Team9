import styled from "styled-components";

const Container = styled.main`
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */
  /* html {
    font-size: 62.5%;
  } */
  /* .main {
    color: #fdfef8;
    font-family: "Lato", sans-serif;
    background-color: #04172a;
  } */
  /* .section {
    max-width: 115rem;
    margin: 0 auto;
  } */
  .display-text {
    font-size: 4rem;
    margin-bottom: 3.5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    color: #d3d4cf;
    text-align: center;
  }
  .login-container {
    display: flex;
    gap: 4rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    /* justify-content: center; */
  }
  .login-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .input-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .login-item-svg {
    padding: 4rem;
  }

  .label-text {
    font-size: 1.8rem;
  }
  .input-box {
    /* width: 100%; */
    padding: 1.4rem;
    font-family: inherit;
    color: #343a40;
    font-size: 1.8rem;
    border-radius: 0.2rem;
    border: 2px solid #eee;
  }
  .input-box::placeholder {
    color: #868e96;
  }
  .input-box:focus {
    outline: none;
    border: 2px solid #343a40;
  }
  .submit-btn {
    font-size: 3rem;
    padding: 1rem;
    color: #fdfef8;
    background-color: #1362b1;
    border: none;
    border-radius: 0.4rem;
  }
  .cta {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 5rem;
  }
  .sign-up:link,
  .sign-up:visited {
    color: #b392e9;
    text-decoration: none;
  }
  .socials {
    display: flex;
    justify-content: space-around;
  }
  .social-login:link,
  .social-login:visited {
    display: flex;
    font-size: 2rem;
    color: #fdfef8;
    border: 1px #a9a9a5 solid;
    border-radius: 0.4rem;
    text-decoration: none;
    padding: 1rem 2rem;
    justify-items: center;
    gap: 1rem;
  }
  .terms {
    color: #d3d4cf;
    font-weight: 700;
    font-size: 1.35rem;
  }
  .condition {
    margin-bottom: 0.8rem;
    display: block;
  }
  .checkbox {
    margin-right: 1rem;
  }
`;

export default Container;
