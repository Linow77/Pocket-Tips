import React from 'react'
import PropTypes from 'prop-types'

const TestComponent = props => {
  const { text } = props
  return (
    <div>
      <p>TestComponent: {text}</p>
    </div>
  )
}

TestComponent.propTypes = {
  text: PropTypes.string
}

export default TestComponent
