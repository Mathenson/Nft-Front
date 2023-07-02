import React from 'react'
import styled from 'styled-components'
//import epo from "../logo1.png"

const LogoText = styled.h1`
font-family: 'Akaya Telivigla', cursive;
transition: all 0.2s ease;



&:hover{
    transform: scale(1.1)
}
`

const Logo = () => {
  return (
   <LogoText>

   </LogoText>
  )
}

export default Logo
