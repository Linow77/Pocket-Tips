import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Footer = props => {
  return <StyledFooter></StyledFooter>
}

Footer.propTypes = {}

const StyledFooter = styled.footer`
  height: 4rem;
  background-color: ${props => props.theme.secondaryColor};
`

export default Footer
