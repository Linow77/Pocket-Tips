import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = props => {
  const { children, type, onClick } = props

  return SwitchButton(children, type, onClick)
}

const SwitchButton = (children, type, onClick) => {
  switch (type) {
    default:
      return <BaseButton onClick={onClick}>{children}</BaseButton>
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

const BaseButton = styled.button`
  font-size: 1rem;
  cursor: pointer;

  //delete auto configuration
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background-color: transparent;
  text-decoration: none;
`

export default Button
