import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect ,useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
height: auto;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};
position: relative;
color: ${(props) => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width: 48em) {
  font-size: ${(props) => props.theme.fontxl};
}

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em) {
  width: 80%;

}
@media (max-width: 48em) {
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

      margin-top: 0;
    }
  }

}

`

const Box = styled.div`
width: 45%;
@media (max-width: 64em) {
  width: 90%;
  align-self: center;
}
`

const Faq = () => {

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub: true,
    })
  
    return () => {
      ScrollTrigger.killAll();
    };
  }, [])

  return (
    <Section ref = {ref} id= "faq">
      <Title>
      FAQ
      </Title>
      <Container>
        <Box>
          <Accordion title="WHERE CAN I VIEW MY NFTS?" >
          Once minted or bought simply connect to your OpenSea account to view your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?" >
          A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="HOW CAN I USE MY NFT?" >
          You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="WHAT ARE THE FORGOTTEN ENTITIES?" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.

          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.
          </Accordion>

        </Box>
      </Container>

    </Section>
  )
}

export default Faq