import styled from "styled-components";

const AuthLibCSS = styled.div`
  margin: 0 150px;
  .single-page {
    grid-auto-rows: minmax(100px, auto);
    margin-top: 80px;
  }
  .cta-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cta-section {
    font-size: 20px;
  }
  .cta-section img {
    height: 100px;
    width: 200px;
  }
  .description {
    border: 2px solid rgba(255, 255, 255, 0.06);
    padding: 10px;
    margin-top: 30px;
  }
  .depend {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .dependency {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #2eb394;
    font-size: 16px;
  }
  .title {
    display: flex;
    gap: 10px;
    width: fit-content;
    align-items: center;
    border-left: 2px solid rgba(255, 255, 255, 0.06);
    border-right: 2px solid rgba(255, 255, 255, 0.06);
    padding: 0 20px;
  }
  .depend-title {
    font-size: 16px;
    margin-left: 20px;
  }
  span {
    color: #2eb394;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  #aut {
    background-color: #2eb394;
    color: #051d36;
    width: 100px;
    border-radius: 5px;
    padding-top: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0em;
    text-align: left;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: left;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: #2eb394;
    font-size: 20px;
  }
  /* #installation {
    height: 50px;
    width: 700px;
    padding: 5px;
    background-color: #051d36;
  } */
  .comment {
    .input-container {
      display: flex;
      /* flex-direction: column; */
      justify-content: center;
      gap: 10px;
      /* width: 80%;
    margin: 0 auto; */
    }
    input {
      width: 70%;
      padding: 0.5em;
      border: none;
      outline: none;
      background-color: transparent;
      border: 2px solid #2eb394;
      border-radius: 8px;
      color: #fdfef8;
      font-size: 1.2em;
    }

    ::placeholder {
      color: #fdfef8;
      padding: 0;
    }
    .btn {
      font-size: 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background-color: #2eb394;
      width: 150px;
      padding: 10px;
    }
    .comment-view {
      margin-top: 20px;
      margin-left: 60px;
      display: inline-block;
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: #2eb394;
      font-size: 20px;
    }
  }
  .join-now {
    display: flex;
    flex-direction: column;
    /* gap: 5px; */
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    h1 {
      font-size: 40px;
      margin: 0;
    }
    p {
      font-size: 30px;
    }
    .btn {
      background-color: #2eb394;
      color: #fdfef8;
      padding: 10px 40px;
      border-radius: 5px;
      font-size: 25px;
    }
    .login {
      font-size: 18px;
    }
  }
  .tag {
    color: #2eb394;
  }
  .discuss {
    font-size: 3px;
    margin: 0;
    margin-bottom: 10px;
  }
`;

export default AuthLibCSS;
