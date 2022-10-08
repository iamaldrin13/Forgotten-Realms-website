import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import Button from './Button';


const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${(props) => props.theme.text};
align-self: flex-start;

span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}
.text-1{
    color: blue;
}
.text-2{
    color: green;
}
.text-3{
    color: gray;
}
.text-4{
    color: red;
}

@media (max-width: 70em) {
    /* mobile */
    font-size: ${(props) => props.theme.fontxl};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}

@media (max-width: 40em) {
    width: 90%;
}


`

const Subtitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em) {
    /* mobile */
    font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 48em) {
    align-self: center;
    text-align: center;
}



`

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button{
        margin: 0 auto;
    }
}

`


const TypeWriterText = () => {
  return (
 <>
    <Title>
        Genesis Collection of
        <Typewriter
        options={{
            autoStart: true,
            loop:true,
        }}
  onInit={(typewriter) => {
    typewriter.typeString('<span class="text-1">Valkyries</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-2">Elves</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-3">Dark Fae</span>')
      .pauseFor(2000)
      .deleteAll()
      .typeString('<span class="text-4>Vampyres</span>')
      .pauseFor(2000)
      .deleteAll()
      .start()
  }}
/>
    
    </Title>
    <Subtitle>Let's go slay some Goblins!</Subtitle>
    <ButtonContainer>
    <Button text="Explore" link="#about"/>
    </ButtonContainer>
 </>
  )
}

export default TypeWriterText