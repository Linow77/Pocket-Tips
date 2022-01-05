import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.svg'

import TestComponent from '../../components/test'

const Header = props => {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TestComponent text='Voici un texte'></TestComponent>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

Header.propTypes = {}

export default Header
