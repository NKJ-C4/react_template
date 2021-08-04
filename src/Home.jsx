import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/home.png";
import Common from "./Common"
const Home = () => {
  return (
    <>
    <Common name='Grow Your Skills With'
    desc='Nishant'
     imgsrc={web}
     visit="/service"
     btname="Get Started"
     />
  
    </>
  );
};

export default Home;
