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
  display: flex;
  flex-direction: column;
  text-align: start;
`
export default Home
