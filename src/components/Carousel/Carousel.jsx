import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Portada1 from '../../assets/img/portada_1.jpg'
import Portada2 from '../../assets/img/portada_2.jpg'
import Portada3 from '../../assets/img/portada_3.jpg'

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

const Carousel = () => {
    return (
        <Swiper 
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            navigation={true} 
            loop={true}
            pagination={{
                clickable: true
            }}
            modules={[Navigation, Pagination, Autoplay]} 
            className="mySwiper"
        >
            <div className="carousel__text">
                <h1>BOMBEROS VOLUNTARIOS DE JOSÉ C. PAZ</h1>
                <p>SACRIFICIO, ABNEGACIÓN Y DESINTERES</p>
                <p>TEL: <span>02320-422222</span></p>
            </div>
            <SwiperSlide className="swiper-slide">
                <img src={Portada1} alt="portada" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={Portada2} alt="portada" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img src={Portada3} alt="portada" />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel;