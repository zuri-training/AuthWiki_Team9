import styled from "styled-components";

const ProfileCSS = styled.div`
  .form {
    margin: 8em 0em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    margin: 2.5em;
  }
  form .input-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    font-size: 18px;
    color: #a9a9a5;
  }
  form .input-box {
    height: 49px;
    width: 560px;
    border-radius: 4px;
    padding: 8px, 16px, 8px, 16px;
    color: #d3d4cf;
    background-color: #04172a;
    border: 1px solid #052a4fbf;
    text-indent: 1em;
  }
  form input::placeholder {
    text-indent: 1em;
  }
  .form button {
    float: left;
  }
  .btn-edit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    text-align: center;
    padding: 10px 20px;
    width: 182px;
    height: 48px;
    background-color: #fff;
    border: none;
    font-size: 20px;
  }
  input:focus {
    /* outline: none !important; */
    outline: #052a4fbf solid 0.1rem !important;
  }
`;

export default ProfileCSS;
