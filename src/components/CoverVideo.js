import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/Home GIF.gif'



const VideoContainer = styled.div`
width: 100%;

img{
    width: 100%;
    height: auto;
    border-radius: 50px 0 50px 0;
    border: 3px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
}

@media (max-width: 64em) {

  min-width: 40vh;
  
}

`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src= {GIF} type="gif" alt= "Forgotten Entities" autoPlay muted loop/>
    </VideoContainer>
  )
}

export default CoverVideo