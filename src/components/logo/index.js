import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

//Logo Files

const Logo = props => {
  const { type, src, width, url } = props

  return SwitchLogo(type, src, width, url)
}

const SwitchLogo = (type, src, width, url) => {
  const Navigate = useNavigate()
  switch (type) {
    case 'Header':
      return <HeaderLogo src={src} onClick={() => Navigate('/')} />

    case 'Clickable':
      return (
        <a href={url}>
          <SectionLogo src={src} width={width} />
        </a>
      )

    default:
      return <BasedLogo src={src} />
  }
}

Logo.propTypes = {
  type: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  url: PropTypes.string
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
const SectionLogo = styled(BasedLogo)`
  width: ${props => props.width};
  height: auto;
  cursor: pointer;
`

export default Logo
