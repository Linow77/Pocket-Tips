import React from 'react'
import styled from 'styled-components'

import NavBar from '../navBar'

const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <NavBar></NavBar>
      </StyledHeader>
    </HeaderContainer>
  )
}

Header.propTypes = {}

const HeaderContainer = styled.div`
  @media ${props => props.theme.device.xlarge} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  background-color: ${props => props.theme.primaryBackgroundColor};
`

const StyledHeader = styled.header`
  margin: 0 1rem;
  @media ${props => props.theme.device.xlarge} {
    min-width: 1200px;
    margin: 0;
  }
`
export default Header
