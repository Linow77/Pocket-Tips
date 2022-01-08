import React from 'react'
import MyLink from '../mylink'
import styled from 'styled-components'
import Logo from '../logo'

const NavBar = () => {
  return (
    <StyledNav>
      <Logo type='Header'></Logo>
      <LinkContainer>
        <MyLink type='NavBar' to='/'>
          Home
        </MyLink>
        <MyLink type='NavBar' to='/installation'>
          Installation
        </MyLink>
        <MyLink type='NavBar' to='/installation'>
          Page3
        </MyLink>
        <MyLink type='NavBar' to='/installation'>
          Page4
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
  background-color: #e3dddb;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export default NavBar
