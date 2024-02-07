import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import HomeComponent from "./Home/HomeComponent";
import AboutComponent from "./About/About";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import FAQS from "./FAQS/FAQSComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import "./App.css";


function App() {
  return (
    <Grid>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="faqs" element={<FAQS/>}/>
        <Route></Route>
      </Routes>
      <FooterComponent />
    </Grid>
  );
}

export default App;
