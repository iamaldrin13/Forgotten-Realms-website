import React from 'react'
import styled from 'styled-components'


import img1 from '../assets/Nfts/noBGr/Valk4.png';
import img2 from '../assets/Nfts/noBGr/Fae4.png';
import img3 from '../assets/Nfts/noBGr/Vamp1.png';
import img4 from '../assets/Nfts/noBGr/Elf5.png';
import img5 from '../assets/Nfts/noBGr/Vamp2.png';
import img6 from '../assets/Nfts/noBGr/Elf3.png';



const Section = styled.section`
width: 100vw;
height: 25rem;
position: relative;
border-top: 2px solid ${props => props.theme.text};
border-top: 2px solid ${props => props.theme.text};

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};
display: flex;
justify-content: center;
align-items: center;


overflow: hidden;

@media (max-width: 48em) {
  height: 15rem;
  flex-direction: column;

}
`

const ImgContainer= styled.div`
width: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;


img{
    width: 15rem;
    height: auto;
}

@media (max-width: 48em) {
    img{
    width: 10rem;
    height: auto;
}

}
`


const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
padding: 1rem 2rem;
z-index: 10;
width: 35%;
text-transform: capitalize;

text-shadow: 1px 1px 2px ${props => props.theme.text};


@media (max-width: 64em) {
    width: 40%;
    font-size: ${props => props.theme.fontxxl};
    text-align: center;
}

@media (max-width: 48em) {
    width: 100%;
    font-size: ${props => props.theme.fontxl};
    padding: 2rem 0;
}
`

const BtnContainer = styled.div`
width: 35%;
display: flex;
justify-content: flex-end;

@media (max-width: 48em) {
    width: 100%;
    justify-content: center;
}

` 

const JoinNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
outline: none;
border: none;
font-weight:600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

@media (max-width: 48em) {
    padding: 1rem 2rem;
}

@media (max-width: 30em) {
    padding: 0.5rem 2rem;
    font-size: ${props => props.theme.fontsm};
}

&:hover{
    transform: scale(0.9);
}

&::after{
   content: ' ';
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%) scale(0);
   border: 2px solid ${props => props.theme.body};
   width: 100%;
   height: 100%;
   border-radius: 50px;
   transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

`



const Banner = () => {
  return (
    <Section>
        <ImgContainer>
        <img src={img1} alt="The Forgotten" />
        <img src={img2} alt="The Forgotten" />
        <img src={img3} alt="The Forgotten" />
        <img src={img4} alt="The Forgotten" />
        <img src={img5} alt="The Forgotten" />
        <img src={img6} alt="The Forgotten" />
        </ImgContainer>
        <Title>Join the <br /> Forgotten Realms </Title>
        <BtnContainer>
        <JoinNow link="https://discord.gg/Ud8M89jf3d">
            Join Now
        </JoinNow>
        </BtnContainer>
    </Section>
  )
}

export default Banner