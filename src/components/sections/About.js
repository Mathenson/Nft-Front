import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes';



const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display:flex;
justify-content: center;
align-items: center;
position: relative;
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;

display: flex;
justify-content:center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Title = styled.h2`
font-size: ${(props => props.theme.fontxxl)};
text-tranform: capitalize;
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto
`

const SubText = styled.p`
font-size: ${(props => props.theme.fontlg)};
color: ${(props) => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`
const SubTextLight = styled.p`
font-size: ${(props => props.theme.fontlg)};
color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
`



const About = () => {
  return (
    <Section>
      <Container>
        <Box> <Carousel /></Box>
        <Box>
          <Title>
          Greetings, dear Humanoids. 
          </Title>
          <SubText>
            THE EPISODES is a collection of NFTs-unique digital collectibles. The Humanoids stores THE EPISODES on the Solana blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight>
            With more than 3000+ digitally drawn traits, each NFT is unique and comes with a membership to an exclusive community of the Humanoids. Join the episodes growing community with multiple benefits and utilities.
          </SubTextLight>
          <ThemeProvider theme={dark}>
          <Button text="JOIN OUR DISCORD" link="#" />
          </ThemeProvider>
        
        </Box>
      </Container>
    </Section>
   
  )
}

export default About
