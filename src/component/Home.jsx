import React from "react";
import '../App.css';
// import "../HeroSection";
import Footer from "./Footer";
import PawaSlider from "./PawaSlider";
import Features from './Feature';

function Home() {
  return (
    <>
      <PawaSlider />
      {/*<HeroSection /> */}
      {/*<Cards /> */}
      <Features />
      <Footer />
    </>
  );
}

export default Home;
