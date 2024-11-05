import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Carousel from './Carousel';
import slider1 from "/src/assets/slider1.jpg";
import slider2 from "/src/assets/slider2.jpg";
import slider3 from "/src/assets/slider3.jpg";

function Slider() {

     return (
        <div className='py-7'>
            <Swiper
                spaceBetween={30}
                loop={true}
                 centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation,]}
                className="mySwiper"
            >
                 <SwiperSlide>
                     <Carousel
                         img={slider1}
                         text={'Mastering Light and Shadow in Realistic Art'}
                     />
                </SwiperSlide>
                 <SwiperSlide>
                     <Carousel
                         img={slider2}
                         text={'Exploring Color Theory for Painters'}
                     />
                </SwiperSlide>
                 <SwiperSlide>
                     <Carousel
                         img={slider3}
                         text={'Techniques for Textured Drawings'}
                     />
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default Slider
