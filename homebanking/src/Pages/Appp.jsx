import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chakra from "./chakra";
import Navbar from "../components/Navbar/Navbar";
import MyCarousel from "../components/Carousell/Carousell";

function Appp() {
  return (
    <Chakra>
      {/* <Router> */}
        <Navbar />
        {/* <Routes>
          <Route path="/" exact>
            
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/contact">
            
          </Route>
        </Routes>*/}
        <MyCarousel />
      {/* </Router> */}
    </Chakra>
  );
}

export default Appp;