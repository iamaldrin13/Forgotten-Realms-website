import React from 'react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';

import img1 from '../assets/Nfts/bighead.svg';
import img2 from '../assets/Nfts/bighead-1.svg';
import img3 from '../assets/Nfts/bighead-2.svg';
import img4 from '../assets/Nfts/bighead-3.svg';
import img5 from '../assets/Nfts/bighead-4.svg';
import img6 from '../assets/Nfts/bighead-5.svg';
import img7 from '../assets/Nfts/bighead-6.svg';
import img8 from '../assets/Nfts/bighead-7.svg';
import img9 from '../assets/Nfts/bighead-8.svg';
import img10 from '../assets/Nfts/bighead-9.svg';

 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";


import "swiper/modules/effect-creative/effect-creative";

// import required modules
import { EffectCreative, Navigation, Pagination, Autoplay } from 'swiper';

const Container = styled.div`
width: 25vw;
height: 70vh;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: right;
align-items: right;
`
const Box1 = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
`

const Creative = () => {
  return (
    <Container>
        <Box> <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction: false,
            
        }}
        
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCreative,Navigation, Pagination, Autoplay ]}
    className="mySwiper"
  >
    <SwiperSlide><img src={img1} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img2} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img3} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img4} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img5} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img6} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img7} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img8} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img9} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img10} alt= "The Weirdos"/></SwiperSlide>
  </Swiper> 
  </Box>
        <Box1> <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction: false,
            reverseDirection:true
        }}
        
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCreative,Navigation, Pagination, Autoplay ]}
    className="mySwiper"
  >
    <SwiperSlide><img src={img1} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img2} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img3} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img4} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img5} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img6} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img7} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img8} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img9} alt= "The Weirdos"/></SwiperSlide>
    <SwiperSlide><img src={img10} alt= "The Weirdos"/></SwiperSlide>
  </Swiper>
   </Box1>    
  
  </Container>
  )
}

export default Creative