import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/installation'>Installation</Link>
    </nav>
  )
}

NavBar.propTypes = {}

export default NavBar
