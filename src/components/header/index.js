import React from 'react'
import styled from 'styled-components'

import NavBar from '../navBar'

const Header = () => {
  return (
    <StyledHeader>
      <NavBar></NavBar>
    </StyledHeader>
  )
}

Header.propTypes = {}

const StyledHeader = styled.header``
export default Header
