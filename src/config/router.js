import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Basics from '../screens/basics'
import Home from '../screens/home'
import Installation from '../screens/installation'
import NotFound from '../screens/notFound'

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

export default Router
