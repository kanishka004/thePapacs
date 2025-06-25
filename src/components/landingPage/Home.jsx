import Navbar from './Navbar/Navbar';
import Hero from './Hero';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { data } from "../../data/data";

const Home = () => {
    return (
        <>
            <section>
                <Swiper
                    spaceBetween={30}
                    speed={2000}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    effect={"fade"}
                    fadeEffect={{ crossFade: true }}
                    modules={[Autoplay, EffectFade]}
                    className="mySwiper"
                >
                    {data.map(({ id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img }) => (
                        <SwiperSlide key={id} className="w-full min-h-screen flex flex-col md:gap-10 gap-4">
                            {/* <Navbar /> */}
                            <Hero
                                colorDeep={colorDeep}
                                mainText={mainText}
                                subText={subText}
                                shadow={shadow}
                                mobileShadow={mobileShadow}
                                img={img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Home