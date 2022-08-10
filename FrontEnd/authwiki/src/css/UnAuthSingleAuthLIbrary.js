import styled from "styled-components";

const UnAuthSingleAuthLIbraryCSS = styled.div`
  .item {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 40px 40px 50px;
    height: 202px;
    background: rgba(2, 48, 106, 0.4);
    border: 1px solid #02306a;
    border-radius: 8px;
    border-top: 10px solid rgba(215, 251, 230, 0.31);
    color: #fdfef8;
  }
  a:link,
  a:visited {
    text-decoration: none;
    color: #fdfef8;
  }
  section div h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
  }
  section .image {
    display: flex;
    gap: 25px;
    align-items: center;
  }
  .auth-image {
    height: 30px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* margin-bottom: 40px; */
    /* gap: 10px; */
  }
  .details p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    /* height: 40px; */
  }
  .comment {
    display: flex;
    align-items: flex-end;
    gap: 40px;
  }
  .comment p {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
  }
`;

export default UnAuthSingleAuthLIbraryCSS;
