import React from 'react';
import aboutImg from "../../assets/images/aboutImg.jpg"
// import aboutUs from "../../assets/images/aboutUs.jpg"
import { motion } from 'framer-motion';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';


function About() {
  return (
    <>
    <Navbar />

    <div className='md:flex block items-center justify-center mt-6 mb-[3rem]'>
      <div className='md:w-1/2 w-full -z-10'>
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className='min-h-[90vh]' src={aboutImg} alt="" />
      </div>
      <motion.div 
      className='md:w-[40%] w-full bg-[#e8fcff] p-12 md:ml-[-5rem] shadow-lg'
      initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
      >
        <h2 className='font-bold bg-gradient-to-r from-orange-500 to-red-500 inline-block text-transparent bg-clip-text text-lg mb-4'>About Us</h2>
        <h1 className='text-[#263733] text-[2.5rem] leading-[2.8rem] font-bold mb-6'>Here is all you need to know about us</h1>
        <p className='text-[#777777] text-[1.1rem] text-justify'>Pashupati Consultancy & Solutions Pvt Ltd is a dynamic IT consulting firm with a steadfast commitment to transforming the world through our innovative expertise. Our core focus revolves around preserving our precious natural resources, advocating for a healthier world through wellness awareness programs, addressing the critical issue of addiction, and empowering individuals of all ages through lifelong learning initiatives. Our dedicated team seamlessly merges technology and engineering to drive meaningful change in these key areas, with the collective goal of shaping a brighter future for all.</p>
      </motion.div>
    </div>

    <Footer />
    </>
  )
}

export default About

