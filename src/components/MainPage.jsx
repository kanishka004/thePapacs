import React from 'react';
import Navbar from "../components/landingPage/Navbar/Navbar";
import Home from './landingPage/Home';
import LogoSlider from './landingPage/LogoSlider';
import AboutUs from './landingPage/AboutUs';
import MissionVision from './landingPage/MissionVision';
import Services from './landingPage/Services';
import Gallery from './landingPage/Gallery';
import Advertisements from './landingPage/Advertisements';
import Testimonials from './landingPage/Testimonials';
// import ContactUs from './landingPage/ContactUs';
import Footer from './landingPage/Footer';

function MainPage() {
  return (
    <>
    <Navbar />
    <Home />
    <LogoSlider />
    <AboutUs />
    <MissionVision />
    <Services />
    <Gallery />
    <Advertisements />
    <Testimonials />
    {/* <ContactUs /> */}
    <Footer />
    </>
  )
}

export default MainPage