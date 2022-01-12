import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return <StyledFooter></StyledFooter>
}

const StyledFooter = styled.footer`
  height: ${props => props.theme.footerHeight};
  background-color: ${props => props.theme.primaryBackgroundColor};
`

export default Footer
