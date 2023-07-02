import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Twitter from '../Icons/Twitter'

const Section = styled.section`
min-height:20vh;
height:20vh;
width:100vh
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};

display:flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;

align-items: center;

border-bottom: 2px solid ${(props) => props.theme.text}; 
`

const Left = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

const iconList = styled.div`
display: flex
align-items: center'
margin: 0 auto;

&>*{
  padding-right: 0.5rem;
  transform: all 0.2 ease;

  &:hover{
    transform: scale(1.2);
  }
}
`

const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-gap: 1rem;
`

const Item = styled.li`
width: fit-content;
cursor: pointer;
`

const Bottom =  styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`


const Footer = () => {
  return (
   <Section>
     <Container>
      <Left>
       <Logo /> 
       <iconList>
      <a href="https://twitter.com" target="_blank"
      rel="nonopener"
      >
        <Twitter />
      </a>

       </iconList>
      </Left>

      <MenuItems>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Roadmap</Item>
      </MenuItems>
     </Container>
     <Bottom>
      <span>
      &copy; {new Date().getFullYear()} The Episodes. All right reserved.
      </span>
      <span>
        Made with &#10084; by Humanoids!
      </span>
     </Bottom>
   </Section>
  )
}

export default Footer
