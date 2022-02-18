import React from 'react'
import MyLink from '../myLink'
import styled from 'styled-components'
import Logo from '../logo'

import ImageLogo from '../../assets/logoBlanc.png'

const NavBar = () => {
  return (
    <StyledNav>
      <Logo type='Header' src={ImageLogo} clickable={true}></Logo>
      <LinkContainer>
        <MyLink type='NavBar' to='/'>
          Installation
        </MyLink>
        <MyLink type='NavBar' to='/basics'>
          Basics
        </MyLink>
        <MyLink type='NavBar' to='/nodejs'>
          NodeJS
        </MyLink>
        <MyLink type='NavBar' to='/python'>
          Python
        </MyLink>
      </LinkContainer>
    </StyledNav>
  )
}

NavBar.propTypes = {}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default NavBar
