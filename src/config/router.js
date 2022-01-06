import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../screens/home'
import Installation from '../screens/installation'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/installation' element={<Installation />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Router
