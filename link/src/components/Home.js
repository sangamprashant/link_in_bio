import React, { useEffect } from "react";
import Hero from "./subHome/Hero";
import "./css/Home.css"
import Service from "./subHome/Service";
import Offer from "./subHome/Offer";
import AboutUs from "./subHome/AboutUs";
import Register from "./subHome/Register";

function Home({space,setMainComponent}) {
  useEffect(()=>{
    setMainComponent(false);
  },[space])
  return (
    <div className="home">
      <Hero />
      <Service/>
      <Offer/>
      <AboutUs/>
      <Register space={space}/>
    </div>
  );
}

export default Home;
