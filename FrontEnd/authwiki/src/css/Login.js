import styled from "styled-components";

const Container = styled.main`
  color: #d3d4cf;
  .section {
    margin: 6.5rem 0;
  }
  .display-text {
    font-size: 5rem;
    margin-bottom: 3.5rem;
    font-weight: 700;
    line-height: 9.5rem;
    word-spacing: 8px;
  }
  .login-container {
    display: flex;
    gap: 4rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .login-item {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .input-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }
  .login-item-svg {
    padding: 4rem;
  }

  .label-text {
    font-size: 1.8rem;
  }
  .input-box {
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
    margin-bottom: 4rem;
  }
  .sign-up:link,
  .sign-up:visited {
    color: #b392e9;
    text-decoration: none;
  }
  .socials {
    display: flex;
    justify-content: space-evenly;
  }
  .social-login:link,
  .social-login:visited {
    display: flex;
    font-size: 2rem;
    color: #d3d4cf;
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
  .password {
    position: absolute;
    right: 16px;
    bottom: 52px;
  }
  .password:hover {
    cursor: pointer;
  }
`;

export default Container;
