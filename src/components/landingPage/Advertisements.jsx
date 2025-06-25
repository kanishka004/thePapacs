
import { Carousel } from "flowbite-react";
import ad1 from "../../assets/images/advertisements/ad1.jpeg";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <>
    <div className="flex items-center justify-center flex-col">
    <div className="font-bold text-[2.2rem] sm:text-[2.8rem] mt-14 sm:mb-8 mb-[-4rem] bg-gradient-to-r from-[#0077b6] to-[#90e0ef] inline-block text-transparent bg-clip-text">
      <motion.h1
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{once:true}}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.5 },
        ease: "easeIn",
        duration: 0.5
      }}
      
      >Advertisements</motion.h1>
    </div>
    <div className=" h-[32rem] xl:h-[36rem] 2xl:h-[38rem] mb-40 w-full md:w-[60vw]">
      <Carousel>
        <img src={ad1} alt="..." />
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
    </div>
    </>
  );
}
