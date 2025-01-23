import React from "react";
import HeroSection from "../../components/herosection/HeroSection";
import AutomobileInfo from "../../components/seconderySection/AutomobileInfo";
import Navigation from "../../components/Navigation/Navigation";
import ImageSlider from "../../components/slider/ImageSlider";
import Testimonial from "../../components/testimonials/Testimonial.Jsx";
import ChooseUs from "../../components/whyChoose/ChooseUs";
import Marque from "../../components/MarqueLine/Marque";
import Services from "../../components/Serivices/Services";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return <>
  <HeroSection/>
  <AutomobileInfo/>
  <Services/>
  <ImageSlider/>
  <ChooseUs/>
  <Testimonial/>
  <Marque/>
  </>;
};

export default HomePage;
