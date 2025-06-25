import { useRef } from 'react';
// import { MdOutlineDevices } from "react-icons/md";
// import { MdBookOnline } from "react-icons/md";
import { MdWebAsset } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { RiHomeOfficeFill } from "react-icons/ri";
// import { MdShoppingCart } from "react-icons/md";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";



const Services = () => {
    const itemsRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);


    const servicesData = [
        { id: 1, icon: <FaMobileAlt />, name: "Mobile Application Development", para:"Mobile application development involve designing, building, and maintaining mobile apps for businesses. IT companies offer custom solutions, ensuring scalability, security, and seamless user experiences across platforms like iOS and Android." },
        { id: 2, icon: <FaLaptopCode />, name: "Website Design & Development", para:"Website design and development focus on creating responsive, user-friendly websites that enhance brand identity, improve functionality, and ensure seamless user experience to drive business growth and engagement." },
        { id: 3, icon: <MdWebAsset />, name: "Digital Marketing", para:"Digital marketing focuses on promoting tech solutions through SEO, content marketing, social media, and targeted ads, enhancing online visibility, lead generation, and customer engagement."},
        { id: 4, icon: <LuNetwork />, name: "Social Networking", para:"Social networking enhances client engagement, builds brand awareness, fosters collaboration, showcases expertise, and drives business growth through targeted communication, networking, and marketing on digital platforms." },
        { id: 5, icon: <FcAdvertising />, name: "Advertising Solution", para:"An advertising solution focuses on promoting technology solutions, enhancing brand visibility, and generating leads through targeted digital campaigns, SEO strategies, and personalized content to attract business clients." },
        { id: 6, icon: <RiHomeOfficeFill />, name: "Consulting", para:"Consulting provides expert guidance on technology strategies, system integration, digital transformation, and optimizing operations to enhance efficiency, security, and innovation for business growth and competitiveness." },
    ];

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - - itemsRef.current.offsetLeft);
        setScrollLeft(itemsRef.current.scrollLeft);
    }

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }

    const handleMouseUp = () => {
        setIsMouseDown(false);
    }

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - itemsRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        itemsRef.current.scrollLeft = scrollLeft - walk;
    }


    return (
        <div className='services-container'>
            <motion.h1
            className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'
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
            >Our Services for You</motion.h1>

            <div className="chooseService" ref={itemsRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                {
                    servicesData.map((service) => {
                        return (

                            <div key={service.id} className="service">
                                <div className="service-icon">{service.icon}</div>
                                <h2 className="service-name my-4">{service.name}</h2>
                                <p className='text-justify text-[1.07rem]'>{service.para}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services

