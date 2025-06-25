import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../../assets/images/gallery1.jpg';
import gallery2 from '../../assets/images/gallery2.jpg';
import gallery3 from '../../assets/images/gallery3.jpg';
import gallery4 from '../../assets/images/gallery4.jpg';
import gallery5 from '../../assets/images/gallery5.jpg';
import gallery6 from '../../assets/images/gallery6.jpg';


function Gallery() {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex w-full mb-20 flex-wrap">
                    <h1 class="sm:text-3xl text-2xl font-bold title-font bg-gradient-to-r from-orange-500 to-red-500 inline-block text-transparent bg-clip-text lg:w-1/3 lg:mb-0 mb-4">Gallery</h1>
                    <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">We are progressively working in the field of Digital education so that we can take technology and breach the gap of education to remotest areas of Uttarakhand and nearby states</p>
                </div>
                <div class="flex flex-wrap md:-m-2 -m-1">
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery1}
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
                            />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery2}
                               initial={{ y: -100, opacity: 0 }}
                               whileInView={{ y: 0, opacity: 1 }}
                               viewport={{once:true}}
                               transition={{
                                 x: { type: "spring", stiffness: 60 },
                                 opacity: { duration: 0.3 },
                                 ease: "easeIn",
                                 duration: 0.3
                               }}
                            />
                        </div>
                        <div class="md:p-2 p-1 w-full">
                            <motion.img alt="gallery" class="w-full h-full object-cover object-center block" src={gallery3}
                               initial={{ y: 100, opacity: 0 }}
                               whileInView={{ y: 0, opacity: 1 }}
                               viewport={{once:true}}
                               transition={{
                                 x: { type: "spring", stiffness: 60 },
                                 opacity: { duration: 0.2 },
                                 ease: "easeIn",
                                 duration: 0.2
                               }}
                            />
                        </div>
                    </div>
                    <div class="flex flex-wrap w-1/2">
                        <div class="md:p-2 p-1 w-full">
                            <motion.img alt="gallery" class="w-full h-full object-cover object-center block" src={gallery4} 
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
                            />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery5}
                               initial={{ y: 100, opacity: 0 }}
                               whileInView={{ y: 0, opacity: 1 }}
                               viewport={{once:true}}
                               transition={{
                                 x: { type: "spring", stiffness: 60 },
                                 opacity: { duration: 0.1 },
                                 ease: "easeIn",
                                 duration: 0.1
                               }}
                            />
                        </div>
                        <div class="md:p-2 p-1 w-1/2">
                            <motion.img alt="gallery" class="w-full object-cover h-full object-center block" src={gallery6} 
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
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery