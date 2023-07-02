import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'


const Section = styled.section`
width: 100vw;
background-color: ${props => props.theme.text};
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-item: center;

width: 85%;
height:4rem;
margin: 0 auto;
`


const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style: none;
`
const MenuItems = styled.li`
margin: 0 1rem;
color:${props => props.theme.body};
cursor:pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
   
}

&:hover::after{
  width:120%
}


`

const Navigation = () => {
  return (
  <Section>
  
     <NavBar>
     <Logo />
       <Menu>
          <MenuItems>Home</MenuItems>
          <MenuItems>About</MenuItems>
          <MenuItems>Roadmap</MenuItems>
  
       </Menu>
      <Button text="Connect Wallet" link="https//gmail" />
     </NavBar>
  </Section>
  )
}

export default Navigation
