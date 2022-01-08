import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = props => {
  const { children } = props
  return <StyledSection>{children}</StyledSection>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

const StyledSection = styled.div``
export default Section
