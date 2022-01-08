import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MyLink = props => {
  const { type, to, children } = props

  return SwitchMyLink(type, to, children)
}

const SwitchMyLink = (type, to, children) => {
  switch (type) {
    case 'NavBar':
      return <NavBarLink to={to}>{children}</NavBarLink>

    default:
      return <BasedLink to={to}>{children}</BasedLink>
  }
}

MyLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const BasedLink = styled(Link)`
  text-decoration: none;
  color: white;
`

const NavBarLink = styled(BasedLink)`
  margin: 1rem;
  :hover {
    text-shadow: 1px 0 0 white;
  }
`

export default MyLink
