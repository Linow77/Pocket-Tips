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
  width: 100%;
  height: 100%;
`

export default Screen
