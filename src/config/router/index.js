import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Basics from '../../screens/basics'
import Installation from '../../screens/installation'
import NodeJS from '../../screens/nodeJS'
import Python from '../../screens/python'
import NotFound from '../../screens/notFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Installation />} />
      <Route path='/basics' element={<Basics />} />
      <Route path='/nodejs' element={<NodeJS />} />
      <Route path='/python' element={<Python />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Router
