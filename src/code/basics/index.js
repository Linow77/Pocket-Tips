export const routerCode = `import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Basics from '../../screens/basics'
import Home from '../../screens/home'
import Installation from '../../screens/installation'
import NotFound from '../../screens/notFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/installation' element={<Installation />} />
      <Route path='/basics' element={<Basics />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router`

export const commonCode = `export const commonTheme = {
  colors: {
    darkRed: '#950740',
    white: '#FFFFFF'
  },
  marges: {
    small: '0.5em',
    medium: '1em',
    large: '1.5em',
    xlarge: '3em'
  },
  fontsize: {
    xsmall: '0.5rem',
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
    mediumlarge: '2.5rem',
    xlarge: '3rem'
  },
  footerHeight: '4rem',
  device: {
    xsmall: \`screen and (max-width: 480px)\`, //mobile devices
    small: \`screen and (min-width: 481px) and (max-width: 768px)\`, //Ipads and tablets
    medium: \`screen and (min-width: 769px) and (max-width: 1024px)\`, //Smalls screens, laptops
    large: \`screen and (min-width: 1025px) and (max-width: 1200px)\`, //Desktops, large screens
    xlarge: \`screen and (min-width: 1201px)\` //Extra large screens, TV
  }
}`

export const themeCode = `import { lightTheme } from './light'
import { darkTheme } from './dark'
export { lightTheme, darkTheme }`

export const lightCode = `import { commonTheme } from '../common'

export const lightTheme = {
  ...commonTheme,
  primaryBackgroundColor: commonTheme.colors.darkRed
  secondaryBackgroundColor: commonTheme.colors.darkBlue,
  tertiaryBackgroundColor: commonTheme.colors.lightBlue,
  quaternaryBackgroundColor: commonTheme.colors.lightGray,
  primaryTextColor: commonTheme.colors.white,
  secondaryTextColor: commonTheme.colors.darkBlue,
  tertiaryTextColor: commonTheme.colors.middleBlue,
  quaternaryTextColor: commonTheme.colors.gray,
  inversedTextColor: commonTheme.colors.white,
  errorColor: commonTheme.colors.strongRed
}`

export const styleComponentCode = `import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = props => {
  const { type, children } = props

  return SwitchTitle(type, children)
}

const SwitchTitle = (type, children) => {
  switch (type) {
    case 'Page':
      return <PageTitle>{children}</PageTitle>

    default:
      return <BaseTitle>{children}</BaseTitle>
  }
}

Title.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const BaseTitle = styled.h1\`
  margin: 0;
\`

const PageTitle = styled(BaseTitle)\`
  font-size: 2rem;
  font-weight: 600;
\`

export default Title`
