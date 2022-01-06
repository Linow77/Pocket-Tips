import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../screens/home'
import Installation from '../screens/installation'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/installation' element={<Installation />} />
    </Routes>
  )
}

export default Router
