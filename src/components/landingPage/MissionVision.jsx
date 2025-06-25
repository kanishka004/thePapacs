import React from 'react';
import mission from "../../assets/images/mission.jpg";
import missionIcon from "../../assets/images/missionIcon.png";
import visionIcon from "../../assets/images/visionIcon.png"
import { motion } from 'framer-motion';

function MissionVision() {
  return (
    <div>
        <div className='min-[950px]:flex block min-[950px]:m-28 items-center justify-center'>
        <motion.div
         className='max-[950px]:w-full max-[950px]:mb-16  border-2 rounded-xl mr-32 flex items-center justify-center flex-col bg-gradient-to-r from-[#0077b6] to-[#00b4d8] ... shadow-xl'
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
         >
            <img src={visionIcon} alt="" className='rounded-full h-40 w-40 my-6' />
            <h1 className='bg-white w-full p-2 text-orange-500 text-center text-2xl font-bold'>Vision</h1>
            <p className='p-10 text-lg text-white text-justify'>At Pashupati Consultancy & Solutions Pvt Ltd, we aspire to be a beacon of positive change, leveraging our IT consulting expertise to champion these critical areas of societal improvement. Our vision is to inspire a future where sustainability, health, and lifelong learning are not just ideals, but lived realities for all. Together, we can build a better world.</p>
        </motion.div>
        <motion.div 
         className='border-2 rounded-xl flex items-center justify-center flex-col bg-gradient-to-r from-[#00b4d8] to-[#0077b6] ... shadow-xl'
         initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{
            delay: 1,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
         >
            <img src={missionIcon} alt="" className='rounded-full h-40 w-40 my-6' />
            <h1 className='bg-white w-full p-2 text-orange-500 text-center text-2xl font-bold'>Mission</h1>
            <p className='p-10 text-lg text-white text-justify'>Pashupati Consulting & Solutions Pvt Ltd is on a mission to revolutionize the world through innovative IT solutions. We are dedicated to preserving natural resources, promoting wellness, combating addiction, and empowering lifelong learning. Our team, driven by technology and engineering, aims to create a brighter, sustainable future for all.</p>
        </motion.div>
        </div>
        {/* <img src={mission} alt="" /> */}
    </div>
    
  )
}

export default MissionVision