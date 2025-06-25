import React from 'react';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';
import { motion } from 'framer-motion';


const Mba = () => {
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
            MBA Online Degree Program - <span className='text-[#0077b6]'>Uttaranchal University Online</span>
            </h1>
            <p class="mb-8 leading-relaxed text-lg text-justify">
            Upgrade your career prospects with our online Master of Business Administration (MBA) program. This comprehensive two-year program will provide you with the necessary skills and knowledge to excel in today's dynamic business landscape. Develop a strong foundation in core business principles, including finance, marketing, operations, and leadership, preparing you for diverse leadership roles across various industries.              
            <br /><br />
            Study flexibly and achieve excellence. Our online format allows you to pursue your MBA degree while balancing work, family, or other commitments. The program curriculum is designed to be relevant and engaging, fostering critical thinking and real-world problem-solving skills that top employers highly seek.           
            <br /><br />
            Uttaranchal University Online offers the best Online MBA Courses in India. You can also explore our Work Integrated MBA Program that combines knowledge with work experience.
             </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] border-0 py-2 px-6 focus:outline-none rounded text-lg"><a target='blank' href="https://www.uuonline.org/master-of-business-administration.html">Explore More</a></button>
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
            <img class="object-cover object-center rounded" alt="hero" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_are_the_Entry_Requirements_for_an_MBA.jpg" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default Mba