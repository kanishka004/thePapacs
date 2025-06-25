import React from 'react';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';
import { motion } from 'framer-motion';


const Bba = () => {
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
            Online BBA Course - <span className='text-[#0077b6]'>Uttaranchal University Online</span>
            </h1>
            <p class="mb-8 leading-relaxed text-lg text-justify">
            Fuel your business ambitions with our online Bachelor of Business Administration (BBA) Degree Course. Gain the knowledge and experience you need to thrive in today's dynamic business landscape. This comprehensive three-year program equips you with a strong foundation in core business principles, preparing you for diverse career opportunities across various industries.             
             <br /><br />
             Study from anywhere, achieve anything. Our flexible online format allows you to pursue your BBA degree while balancing work or other commitments. Explore a comprehensive tailor-made curriculum that delves into essential business subjects, fostering the skills and expertise you need to make your mark in the ever-evolving business world.            
             <br /><br />
             Uttaranchal University Online offers the best online BBA degree in India. You can also explore our BBA degree apprenticeship.
             </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] border-0 py-2 px-6 focus:outline-none rounded text-lg"><a target='blank' href="https://www.uuonline.org/bba.html">Explore More</a></button>
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
            <img class="object-cover object-center rounded" alt="hero" src="https://media.licdn.com/dms/image/v2/D4D12AQGKdwgGCyU-4g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691505167486?e=2147483647&v=beta&t=QH0uX04yrSr3egDXMQF-KElZKOa9kKqP5T1svYjj1tk" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default Bba