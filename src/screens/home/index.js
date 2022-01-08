import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeContainer>
      <p>Home</p>
    </HomeContainer>
  )
}

Home.propTypes = {}

const HomeContainer = styled.div`
  max-width: 100%;
  background-color: ${props => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  text-align: start;
  font-size: 0.75rem;
`
export default Home
