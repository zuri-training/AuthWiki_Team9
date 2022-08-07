import styled from "styled-components";

const AuthLibCSS = styled.div`
  .single-page {
    height: 300vh;
    background-color: #04172a;
    grid-auto-rows: minmax(100px, auto);
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
    height: 30px;
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
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
  }
  #installation {
    height: 50px;
    width: 700px;
    padding: 5px;
    background-color: #051d36;
  }

  @media screen and (min-width: 320px) and (max-width: 1000px) {
    .single-page {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(5, 1fr);
      gap: 30px;
      background-color: #04172a;
      height: 450vh;
      grid-auto-rows: minmax(100px, auto);
    }
    #auth {
      grid-column: 1/5;
      grid-row: 2/5;
      height: 200px;
      color: white;
      margin-top: -450px;
      margin-left: 30px;
    }

    #installation {
      width: 340px;
      margin-left: 5px;
    }
    input {
      margin-left: -5px;
      width: 300px;
      size: 50px;
    }
    #edit {
      width: 450px;
      margin-top: -70px;
      grid-column: 1/5;
      grid-row: 1/5;
      height: 350px;
      margin-left: -100px;
    }
  }
`;

export default AuthLibCSS;
