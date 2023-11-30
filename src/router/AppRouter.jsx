import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CartPage } from '../ecommerce/pages'
import { Navbar } from '../ecommerce/components'
// import { CartPage } from '../ecommerce/pages/CartPage'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/cart' element={ <CartPage /> } />
      </Routes>
    </>
  )
}
