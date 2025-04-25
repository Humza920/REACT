import React from "react";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Mid from "../../Components/Mid";
import Features from "../../Components/Features";
import Footer from "../../Components/Footer";
import FeaturedPets from "../../Components/FeaturedPets";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedPets />
      <Features />
      <Mid />
      <Footer />
    </>
  );
};

export default Home;
