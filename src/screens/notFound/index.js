import React from 'react'
import { useNavigate } from 'react-router-dom'
import Screen from '../../components/screen'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Screen>
      <h1>404 Not Found</h1>
      <button onClick={() => navigate('/')}>Retour</button>
    </Screen>
  )
}

export default NotFound
