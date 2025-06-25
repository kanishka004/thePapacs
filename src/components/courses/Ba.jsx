import React from 'react';
import Navbar from '../landingPage/Navbar/Navbar';
import Footer from '../landingPage/Footer';
import { motion } from 'framer-motion';


const Ba = () => {
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
                            Online BA Course - <span className='text-[#0077b6]'>Uttaranchal University Online</span>
                        </h1>
                        <p class="mb-8 leading-relaxed text-lg text-justify">
                            Broaden your horizons and expand your knowledge with our online Bachelor of Arts (BA) program. Explore diverse subjects illuminating cultural, historical, geographical, and political landscapes. Gain a deeper understanding of the forces that shape our world and the role individuals play in driving positive change.
                            <br /><br />
                            Embrace a flexible and enriching learning journey. Pursue Online BA Degree in India with Uttaranchal University, which offers a variety of learning methods, catering to different learning styles. Engage with interactive content, participate in stimulating discussions, and develop critical thinking skills as you embark on this rewarding intellectual adventure.
                            <br /><br />
                            Looking for a Work-Integrated Curriculum? Explore the Online BA with Apprenticeship Program.
                        </p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white hover:from-[#00b4d8] hover:to-[#0077b6] ... bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... transition-all duration-500 text-[1.1rem] border-0 py-2 px-6 focus:outline-none rounded text-lg"><a target='blank' href="https://www.uuonline.org/bachelor-of-arts.html">Explore More</a></button>
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
                        <img class="object-cover object-center rounded" alt="hero" src="https://5.imimg.com/data5/SELLER/Default/2024/2/393588792/UH/TT/HU/213933132/what-is-ba-bachelor-of-art-500x500.jpg" />
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>

    )
}

export default Ba