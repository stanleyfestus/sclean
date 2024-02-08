import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Grid } from "@mui/material";
import HomeComponent from "./Home/HomeComponent";
import AboutComponent from "./About/About";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FAQS from "./FAQS/FAQSComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import ContactUsComponent from "./ContactUs/ContactUsComponent";
import ServicesComponent from "./Services/ServicesComponent";
import "./App.css";

function App() {
  return (
    <Grid>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="faqs" element={<FAQS />} />
        <Route path="contactus" element={<ContactUsComponent />} />
        <Route path="services" element={<ServicesComponent />} />
      </Routes>
      <FooterComponent />
    </Grid>
  );
}

export default App;
