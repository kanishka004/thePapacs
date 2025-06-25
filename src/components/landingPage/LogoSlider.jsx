import React from 'react';
import dell from "../../assets/images/dell.jpeg";
import Arista from "../../assets/images/Arista.jpeg";
import Dlink from "../../assets/images/Dlink.png";
import extreme from "../../assets/images/extreme.jpeg";
import Secureye from "../../assets/images/Secureye.png";
import nvidia from "../../assets/images/nvidia.jpeg";

const LogoSlider = () => {

    const sliderData = [
        { id: 1, src: dell },
        { id: 2, src: Arista },
        { id: 3, src: Dlink},
        { id: 4, src: extreme },
        { id: 5, src: Secureye },
        { id: 6, src: nvidia},
        { id: 7, src: dell },
        { id: 8, src: Arista },
        { id: 9, src: Dlink},
        { id: 10, src: extreme },
        { id: 11, src: Secureye },
        { id: 12, src: nvidia},
    ]

    return (
        <div className="slider">
            <div className="slide-track">
                {sliderData.map((item) => (
                    <div key={item.id} className="slide">
                        <img src={item.src} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoSlider