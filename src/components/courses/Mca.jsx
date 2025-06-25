import React from 'react';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';
import { motion } from 'framer-motion';


const Mca = () => {
  return (
    <>
      <Navbar />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <motion.div 
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
          class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          >
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Online MCA Course - <span className='text-[#0077b6]'>Uttaranchal University Online</span>
            </h1>
            <p class="mb-8 leading-relaxed text-lg text-justify">
              Upskill for success in the ever-evolving IT industry with our online Master of Computer Applications (MCA) program. This program equips you with the latest in-demand knowledge and skills, preparing you for a rewarding career. Dive deep into the fundamentals and advanced features of computer software and systems, gaining a comprehensive understanding necessary to thrive in today's dynamic technological landscape.
              <br /><br />
              Flexible learning, fulfilling future. This Online MCA Course in India offers unmatched convenience, allowing you to pursue your MCA degree while managing work, family, or other commitments. The program curriculum is designed to align with current industry trends, ensuring you graduate with the expertise today's top employers seek. You can also explore our MCA Apprenticeship Program that blends work experience and theoretical knowledge.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] border-0 py-2 px-6 focus:outline-none rounded text-lg"><a target='blank' href="https://www.uuonline.org/master-of-computer-applications.html">Explore More</a></button>
            </div>
          </motion.div>
          <motion.div 
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
          class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          >
            <img class="object-cover object-center rounded" alt="hero" src="https://5.imimg.com/data5/SELLER/Default/2021/12/RA/NZ/YG/14474199/mca-course-from-distance-education-in-delhi.jpg" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default Mca