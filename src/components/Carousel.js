import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import styled from 'styled-components';

import img1 from '../assets/Nfts/episodeNft2.jpeg'
import img2 from '../assets/Nfts/episodes3.jpeg'
import img3 from '../assets/Nfts/episodesNft4.jpeg'


const Container = styled.div`
width: 30vw;
height: 70vh;

.swiper{
   width: 100%; 
   height: 100%; 
}

.swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
}

`



const Carousel = () => {
  return (
    <Container>
        <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="episodes" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="episodes" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="episodes" /></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
    </Container>
  )
}

export default Carousel
