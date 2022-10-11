import React, { useRef } from 'react';
import styled, { keyframes } from "styled-components";


import img1 from '../../assets/Nfts/wBGr/Valk1.png';
import img2 from '../../assets/Nfts/wBGr/DarkFae1.png';
import img3 from '../../assets/Nfts/wBGr/Vamp1.png';
import img4 from '../../assets/Nfts/wBGr/Elf1.png';
import img5 from '../../assets/Nfts/wBGr/Vamp2.png';
import img6 from '../../assets/Nfts/wBGr/Elf2.png';
import img7 from '../../assets/Nfts/wBGr/DarkFae2.png';
import img8 from '../../assets/Nfts/wBGr/Valk2.png';
import img9 from '../../assets/Nfts/wBGr/Elf3.png';
import img10 from '../../assets/Nfts/wBGr/Valk3.png';
import img11 from '../../assets/Nfts/wBGr/Valk4.png';
import img12 from '../../assets/Nfts/wBGr/DarkFae4.png';
import img13 from '../../assets/Nfts/wBGr/Vamp3.png';
import img14 from '../../assets/Nfts/wBGr/DarkFae3.png';
import img15 from '../../assets/Nfts/wBGr/Vamp4.png';
import img16 from '../../assets/Nfts/wBGr/Elf5.png';
import img17 from '../../assets/Nfts/wBGr/Valk6.png';
import img18 from '../../assets/Nfts/wBGr/Valk5.png';
import img19 from '../../assets/Nfts/wBGr/Elf4.png';
import ETH from '../../assets/icons8-ethereum-48.png';

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 25s;

  @media (max-width: 30em) {
    animation-duration: 20s;
  }
}

&>*:last-child{
  animation-duration: 20s;

  @media (max-width: 30em) {
    animation-duration: 15s;
  }
}
`

const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)};


`


const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`

const ImgContainer = styled.div`
width: 15rem;
padding: 0.3rem;
margin: 0 1rem;
background-color: ${props => props.theme.carouselColor};

border-radius: 30px;
cursor: pointer;

@media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }

img{
  width: 100%;
  height: auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

`


const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 3px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};

border-bottom-left-radius: 25px;
border-bottom-right-radius: 25px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.textRgba}, 0.8)`};
  font-weight: 600;
  line-height:1.5rem;

}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontsm};
  }

}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`


const NftItem = ({name="", img, number=0, price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return(
    <ImgContainer onMouseOver={ e=> pause(e)} onMouseOut={ e=> play(e)}>
      <img src={img} alt = "The Forgotten" />
      <Details>
      <div>
        <span>{name}</span> <br />
        <h1>#{number}</h1>
      </div>

      <div>
        <span>Price</span>
        <Price>
          <img src={ETH} alt="ETH" />
        <h1>{Number(price).toFixed(1)}</h1>
        </Price>
      </div>
      </Details>
    </ImgContainer>
  )

}


const Showcase = () => {


  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    
    <Section id= "showcase">
      
      <Row direction="none" ref={Row1Ref}>
        
       <NftItem name={"Valkyrie"} img={img1} number={888} price={3.5}  passRef = {Row1Ref}/>
       <NftItem name={"DarkFae"} img={img2} number={332} price={6.5}  passRef = {Row1Ref}/>
       <NftItem name={"Vampyre"} img={img3} number={452} price={3.5}  passRef = {Row1Ref}/>
       <NftItem name={"Elf"} img={img4} number={632} price={4.5}  passRef = {Row1Ref}/>
       <NftItem name={"Vampyre"} img={img5} number={654} price={4.1}  passRef = {Row1Ref}/>
       <NftItem name={"Valkyrie"} img={img11} number={521} price={3.9}  passRef = {Row1Ref}/>
       <NftItem name={"Dark Fae"} img={img12} number={633} price={4.1}  passRef = {Row1Ref}/>
       <NftItem name={"Vampyre"} img={img13} number={62} price={4.3}  passRef = {Row1Ref}/>
       <NftItem name={"Dark Fae"} img={img14} number={323} price={3.6}  passRef = {Row1Ref}/>
       <NftItem name={"Vampyre"} img={img15} number={211} price={2.6}  passRef = {Row1Ref}/>
      </Row>

      <Row direction="reverse" ref={Row2Ref}>
      <NftItem name={"Elf"} img={img6} number={545} price={3.9}  passRef = {Row2Ref}/>
       <NftItem name={"Dark Fae"} img={img7} number={614} price={3.1}  passRef = {Row2Ref}/>
       <NftItem name={"Valkyrie"} img={img8} number={64} price={3.3}  passRef = {Row2Ref}/>
       <NftItem name={"Elf"} img={img9} number={32} price={4.6}  passRef = {Row2Ref}/>
       <NftItem name={"Valkyrie"} img={img10} number={21} price={2.5}  passRef = {Row2Ref}/>
       <NftItem name={"Elf"} img={img16} number={95} price={3.9}  passRef = {Row2Ref}/>
       <NftItem name={"Valkyrie"} img={img17} number={644} price={4.1}  passRef = {Row2Ref}/>
       <NftItem name={"Valkyrie"} img={img18} number={77} price={4.3}  passRef = {Row2Ref}/>
       <NftItem name={"Elf"} img={img19} number={313} price={4.6}  passRef = {Row2Ref}/>
       
      </Row>
      
    </Section>
  )
}

export default Showcase