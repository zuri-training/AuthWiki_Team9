import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import GettingStarted from "../components/GettingStarted";

const Home = () => {
  return (
    <React.Fragment>
      <GettingStarted />
    </React.Fragment>
  );
};

const Wrapper = styled.h1`
  color: black;
`;

export default Home;
