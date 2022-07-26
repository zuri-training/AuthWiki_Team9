import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          toast.success("Account created successfully");
        }}
      >
        Test
      </button>
      <Wrapper>Home Page</Wrapper>
    </div>
  );
};

const Wrapper = styled.h1`
  color: black;
`;

export default Home;
