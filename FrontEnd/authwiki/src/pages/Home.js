import "react-toastify/dist/ReactToastify.css";
import React from "react";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AuthLibrary from "../components/AuthLibrary";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <GettingStarted />
      <AuthLibrary />
      <Testimonial />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
