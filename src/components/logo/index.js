import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

//Logo Files
import ImageLogo from '../../assets/logoBlanc.png'

const Logo = props => {
  const { type } = props

  return SwitchLogo(type)
}

const SwitchLogo = type => {
  const Navigate = useNavigate()
  switch (type) {
    case 'Header':
      return <HeaderLogo src={ImageLogo} onClick={() => Navigate('/')} />

    default:
      return <BasedLogo src={ImageLogo} />
  }
}

Logo.propTypes = {
  type: PropTypes.string
}

const BasedLogo = styled.img`
  height: 300px;
  width: auto;
`

const HeaderLogo = styled(BasedLogo)`
  height: 2.5rem;
  width: auto;
  margin: 0.25rem;
  cursor: pointer;
`

export default Logo
