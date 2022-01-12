import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

const CodeArea = props => {
  const { codeString, language } = props
  return (
    <StyledSyntaxHighlighter
      language={language}
      style={docco}
      wrapLongLines={true}
    >
      {codeString}
    </StyledSyntaxHighlighter>
  )
}

CodeArea.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  margin: 1rem 0;
  border: 1px solid black;
  border-radius: 0.25rem;
  text-align: left;
`
export default CodeArea
