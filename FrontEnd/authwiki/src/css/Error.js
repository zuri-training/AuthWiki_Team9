import styled from "styled-components";

const ErrorContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  .wrapper {
    text-align: center;
  }
  .wrapper h2 {
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
  }
  .wrapper img {
    width: 600px;
    max-width: 75%;
  }
  .wrapper h4 {
    color: #fff;
    margin: 40px 40px;
    font-size: 3rem;
  }
  .main-btn {
    text-decoration: none;
    color: #04172a;
    background-color: #fdfef8;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    padding: 20px 40px;
    border-radius: 4px;
    order: 1;
    flex-grow: 0;
  }
`;
export default ErrorContainer;
