import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/services/ServicesPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import ContactUs from "./components/contactUs/ContactUs";

const ReactRouting = () => {
  return (
    <div>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default ReactRouting;
