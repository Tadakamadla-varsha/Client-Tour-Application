import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../../pages/Home";




const Layout= () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      <Footer/>
     
    </>
  );
};

export default Layout;
