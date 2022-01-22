import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Screen = props => {
  const { children } = props
  return (
    <ScreenContainer>
      <StyledScreen>{children}</StyledScreen>
    </ScreenContainer>
  )
}

Screen.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const ScreenContainer = styled.div`
  @media ${props => props.theme.device.xlarge} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  flex: 1;
`

const StyledScreen = styled.div`
  margin: 1rem;
  @media ${props => props.theme.device.xlarge} {
    min-width: 1200px;
    margin: 1rem 0;
  }
`

export default Screen
