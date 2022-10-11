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
          <Accordion title="WHAT IS THE FORGOTTEN REALMS PROJECT?" >
          It is a series of collection that starts with the launch of the forgotten entities, four warring races fighting in the Forgotten Realms Metaverse for the title of the strongest. 
          </Accordion>

          <Accordion title="WHAT IS THE METAVERSE?" >
          A metaverse is a network of 3D virtual worlds focused on social connection. 
          <br /><br />In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.
          <br /><br />Think of, Ready Player One (2018) movie.
          </Accordion>

          <Accordion title="WHAT IS A MINT AND WILL THE FORGOTTEN REALMS HAVE A MINT DATE?" >
          In order to own a digital part of our genesis project, you’ll need a digital certificate of ownership built on the blockchain. 
          <br /><br />This is called an NFT and guarantees ownership of your unique digital asset.

          <br /><br />Minting means converting digital data into crypto collections or digital assets recorded on the blockchain. 
          <br /><br />When it’s time to release assets from our world, we’ll schedule what is termed a mint. 
          <br /><br />This is a date & time when we will make this process available for those who want to collect one of our NFTs.

          <br /><br />Our mint dates will be announced officially on Twitter and Discord ONLY. 
          <br /><br />We will never DM you directly about a mint so please only refer to our official social media channels.
          
          </Accordion>
          </Box>
          <Box>
          <Accordion title="HOW CAN I USE MY NFT?" >
          You will be able to use your NFT as an avatar in the Metaverse, it will also be an NFT factory. 
          <br /><br />More details will be revealed on Twitter and Discord server. 
          <br /><br />Holding also means that you are part of an exclusive network of artists, developers, investors and entrepreneurs.
          </Accordion>
          <Accordion title="CAN I BE A PART OF THE REALM WITHOUT OWNING ANYTHING?" >
          Yes! Although, to access our full range of content, you will need to own at least one NFT from our collection, there will always be a place for everyone in the Realm.

          <br /><br />We always put the community's best interest in our every action, we’d be nothing without you! So, even if you never own anything, you can still enjoy being part of REALM.
          </Accordion>
          <Accordion title="WHO IS BEHIND THE PROJECT?" >
          Team Valkyrie is composed of artists, developers, story-tellers and technologists; with a collective experience of 20 years in their respective industries. 

          <br /><br />The Genesis collection will be the start of VC funding from some of the world’s most reputable investors to bring you THE FORGOTTEN REALMS.
          </Accordion>

        </Box>
      </Container>

    </Section>
  )
}

export default Faq