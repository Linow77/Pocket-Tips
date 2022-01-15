import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SubTitle = props => {
  const { type, children } = props

  return SwitchSubTitle(type, children)
}

const SwitchSubTitle = (type, children) => {
  switch (type) {
    case 'Page':
      return <PageSubTitle>{children}</PageSubTitle>

    default:
      return <BaseSubTitle>{children}</BaseSubTitle>
  }
}

const BaseSubTitle = styled.h2`
  text-align: left;
  margin: 0;
  color: ${props => props.theme.primaryBackgroundColor};
`

const PageSubTitle = styled(BaseSubTitle)`
  font-size: 1.5rem;
  font-weight: 500;
`

SubTitle.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default SubTitle
