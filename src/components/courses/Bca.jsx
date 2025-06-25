import React from 'react';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';
import { motion } from 'framer-motion';


const Bca = () => {
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
              Online BCA Course - <span className='text-[#0077b6]'>Uttaranchal University Online</span>
            </h1>
            <p class="mb-8 leading-relaxed text-lg text-justify">
              Are you looking to launch a rewarding career in the IT industry? Our Online Bachelor of Computer Applications (BCA) program equips you with the skills and knowledge to thrive. Gain a strong foundation in computer applications and software development, preparing you for diverse career paths within the ever-evolving tech landscape.
              <br /><br />
              This flexible online BCA program caters to your needs. Learn from an industry-aligned curriculum, mastering subjects relevant to the modern workplace. We offer a supportive learning environment, empowering you to develop technical expertise and strong communication skills for successful professional interaction. Uttaranchal University Online offers one of the best online BCA degrees in India as well as BCA with Apprenticeship.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] border-0 py-2 px-6 focus:outline-none rounded text-lg"><a target='blank' href="https://www.uuonline.org/bachelor-of-computer-applications.html">Explore More</a></button>
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
            <img class="object-cover object-center rounded" alt="hero" src="https://www.cpj.edu.in/wp-content/uploads/2022/11/bca-admission-2021.jpeg" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default Bca