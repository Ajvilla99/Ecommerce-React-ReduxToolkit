import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../ecommerce/pages/Home'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
    </Routes>
  )
}
