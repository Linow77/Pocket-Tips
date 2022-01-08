import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Text = props => {
  const { type, children } = props

  return SwitchText(type, children)
}

const SwitchText = (type, children) => {
  switch (type) {
    case 'Section':
      return <SectionText>{children}</SectionText>

    case 'InlineCode':
      return (
        <InlineContainer>
          <CodeText>{children}</CodeText>
        </InlineContainer>
      )

    default:
      return <BaseText>{children}</BaseText>
  }
}
Text.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const BaseText = styled.p`
  margin: 0;
  text-align: left;
  color: ${props => props.theme.primaryColor};
`

const SectionText = styled(BaseText)`
  font-size: 1rem;
`

const InlineContainer = styled.div`
  padding: 0.25rem;
  background-color: lightgray;
  width: fit-content;
`

const CodeText = styled(BaseText)`
  color: black;
`

export default Text
