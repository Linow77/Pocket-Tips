import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Screen = props => {
  const { children } = props
  return <StyledScreen>{children}</StyledScreen>
}

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const StyledScreen = styled.div`
  margin: 1rem;

  //extra large screen
  @media ${props => props.theme.device.xlarge} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default Screen
