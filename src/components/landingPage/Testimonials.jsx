import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


const Testimonials = () => {

    const mainControls1 = useAnimation();

    const section1 = useRef(null);
    const isInView1 = useInView(section1, { once: true });

    useEffect(() => {
        if (isInView1) {
            mainControls1.start("visible");
        }
    }, [isInView1]);


    return (
        <div className='bg-gradient-to-r from-[#90e0ef] to-[#0077b6] ... pt-14' ref={section1}>
            <section class="text-gray-600 body-font mb-24 mx-[2rem]">
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{once:true}}
                    transition={{
                      delay: 0.3,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 0.5 },
                      ease: "easeIn",
                      duration: 0.5
                    }}        
                    className='text-center font-bold text-[2.6rem] mb-[-3rem] bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'
                >
                    Testimonials
                </motion.h1>
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:flex block -m-4">
                        <motion.div
                            className="lg:w-1/3 lg:mb-0 mb-6 p-8 bg-white rounded-3xl shadow-xl hover:scale-105 duration-500"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls1}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >
                            <div class="h-full text-center ">
                                <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center drop-shadow-lg rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png" />
                                <p class="leading-relaxed text-justify">Navodaya School Dehradun For saftey purpose we asked a CCTV Camera proposal from Pashupati Consultancy,Their service is very good and well Managed.</p>
                                <span class="inline-block h-1 w-10 rounded bg-gradient-to-r from-[#00b4d8] to-[#0077b6] ... mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">SAURABH SATI</h2>
                                <p class="text-gray-500">Navodaya School</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/3 lg:mb-0 mb-6 p-8 rounded-3xl bg-white lg:mx-8 shadow-xl hover:scale-105 duration-500"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls1}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center drop-shadow-lg rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXv1HFFMjp0Hhho-5rpeW6N6VYeIK-YYu7ng&s" />
                                <p class="leading-relaxed text-justify">I have given a fire saftey contract to Pashupati group,they have provided the genuine parts with good after sales service.</p>
                                <span class="inline-block h-1 w-10 rounded bg-gradient-to-r from-[#00b4d8] to-[#0077b6] ... mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">AZAHAR ALI</h2>
                                <p class="text-gray-500">Builder</p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="lg:w-1/3 lg:mb-0 p-8 rounded-3xl bg-white shadow-xl hover:scale-105 duration-500"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls1}
                            transition={{ ease: "easeOut", duration: 2 }}
                        >
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-28 h-28 mb-8 object-cover object-center drop-shadow-lg rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzzCpnE0enlEeacrQHddcjdy1bKy4rqZOK5g&s" />
                                <p class="leading-relaxed text-justify">The demands for financial institutions have changed a bit. Obfuscation is no longer accepted, which is why this Business WordPress Theme is so perfect.</p>
                                <span class="inline-block h-1 w-10 rounded bg-gradient-to-r from-[#00b4d8] to-[#0077b6] ... mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Debbie Kübel-Sorger</h2>
                                <p class="text-gray-500">Chairman, Kreutz Airlines</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
