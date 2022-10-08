import React from 'react';
import styled from 'styled-components';
import 'swiper/swiper-bundle.css';


 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";


import "swiper/modules/effect-cards/effect-cards";

// import required modules
import { EffectCards, Navigation, Pagination, Autoplay } from 'swiper';



import img1 from '../assets/Nfts/noBGr/Valk5.png';
import img2 from '../assets/Nfts/noBGr/Fae4.png';
import img3 from '../assets/Nfts/noBGr/Vamp1.png';
import img4 from '../assets/Nfts/noBGr/Elf5.png';
import img5 from '../assets/Nfts/noBGr/Vamp2.png';
import img6 from '../assets/Nfts/noBGr/Elf2.png';
import img7 from '../assets/Nfts/noBGr/Fae5.png';
import img8 from '../assets/Nfts/noBGr/Elf3.png';
import img9 from '../assets/Nfts/noBGr/Fae3.png';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div`
width: 25vw;
height: 60vh;

@media (max-width: 70em) {
    
    height: 60vh;
}

@media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
}

@media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
}

@media (max-width: 30) {
    height: 45vh;
    width: 60vw;
}


.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    padding: 1rem 1rem;
    align-content: center;

    display: flex;
    justify-content: center;
 
    img{
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
}

.swiper-button-next{
    color: ${props => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em) {
    width: 3rem;   
    }

    @media (max-width: 30em) {
    width: 2rem;   
    }

}

.swiper-button-prev{
    color: ${props => props.theme.text};
    left: 0;
    width: 4rem;
    top: 60%;
    transform: rotate(180deg);

    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
        display: none;
    }

    @media (max-width: 64em) {
    width: 3rem;   
    }

    @media (max-width: 30em) {
    width: 2rem;   
    }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay={{
            delay:2000,
            disableOnInteraction: false
        }}
        pagination={{
            type:'fraction',
        }}
        scrollbar = {{
            draggable:true
        }}
        
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCards,Navigation, Pagination, Autoplay ]}
    className="mySwiper"
  >
    <SwiperSlide><img src={img1} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img2} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img3} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img4} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img5} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img6} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img7} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img8} alt= "The Forgotten"/></SwiperSlide>
    <SwiperSlide><img src={img9} alt= "The Forgotten"/></SwiperSlide>
   
  </Swiper>
  </Container>
  )
}

export default Carousel