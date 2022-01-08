import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

const CodeArea = props => {
  const { codeString, language } = props
  return (
    <StyledCodeArea>
      <SyntaxHighlighter language={language} style={docco} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>
    </StyledCodeArea>
  )
}

CodeArea.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

const StyledCodeArea = styled.div``

export default CodeArea
