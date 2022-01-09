import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = props => {
  const { type, children } = props

  return SwitchTitle(type, children)
}

const SwitchTitle = (type, children) => {
  switch (type) {
    case 'Page':
      return <PageTitle>{children}</PageTitle>

    default:
      return <BaseTitle>{children}</BaseTitle>
  }
}

Title.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const BaseTitle = styled.h1`
  margin: 0;
`

const PageTitle = styled(BaseTitle)`
  font-size: 2rem;
`

export default Title
