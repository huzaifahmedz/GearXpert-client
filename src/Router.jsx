import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/services/ServicesPage";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/About/AboutPage";
import ContactUs from "./pages/contactUs/ContactUs";
import ToolsEquipment from "./pages/Tools_&_Equipment/ToolsEquipment";
import CarAccessories from "./pages/CarAccessories/CarAccessories";
import EngineParts from "./pages/EnginParts/EnginParts";

const ReactRouting = () => {
  return (
    <div>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path='/Tools&Equipment' element={<ToolsEquipment/>}/>
        <Route path="/car-accessories" element={<CarAccessories/>}/>
        <Route path="/engine-parts" element={<EngineParts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default ReactRouting;
