import "react-toastify/dist/ReactToastify.css";
import React from "react";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <React.Fragment>
      <GettingStarted />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
