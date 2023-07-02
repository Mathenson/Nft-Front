import React from 'react'
import styled from 'styled-components'
import TypeWriter from 'typewriter-effect';
import Button from '../Button';

const Title = styled.h1`
font.size: ${props => props.theme.fontxxl};
text-tranform: Capitalize;
width: 80%;
align-self: flex-start;


span{
    font-family: 'Akaya Telivigala', cursive;
    text-transform: uppercase;
}
.text{
    color:#DC1FFF;
}
`

const Buttoncontaner = styled.div`
width: 80%;
align-self:flex-start
`
const SubTitle = styled.h3`
font-size: ${(props) => props.theme.fontlg};
text-decoration: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom: 1rem;
width: 80%;
align-self: flex-start;
`

const TypeWriterText = () => {
  return (
 <>

   <Title>

     The Episodes Watchword!

    <TypeWriter 
    options={{
        autoStart: true,
        loop:true,
    }}
onInit={(typewriter) => {
    typewriter.typeString('We Are Not Just Humanoids')
    .pauseFor(2000)
    .deleteAll()
    typewriter.typeString('We are' +"  "+ "<span class='text'>$SOL</span>"+ " " +'Maxis..')
    .pauseFor(2000)
    .deleteAll()
    typewriter.typeString('..bringing' +"  "+ "<span class='text'>THE EPISODES</span>")
    .pauseFor(2000)
    .deleteAll()
    .start();
    
}}

 />
</Title>
<SubTitle>Mad of Lads? Try Something Weird.</SubTitle>
<Buttoncontaner>
<Button text="LFG !" link="#about" />
</Buttoncontaner>

</>
  );
};

export default TypeWriterText;
