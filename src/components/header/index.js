import React from 'react'

import TestComponent from '../../components/test'
import NavBar from '../navBar'

const Header = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
        <TestComponent text='Voici un texte'></TestComponent>
      </header>
    </div>
  )
}

Header.propTypes = {}

export default Header
