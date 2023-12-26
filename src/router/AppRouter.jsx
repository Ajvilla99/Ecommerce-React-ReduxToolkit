import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CartPage } from '../ecommerce/pages'
import { Footer, Navbar } from '../ecommerce/components'
import { CategoriesPage } from '../ecommerce/pages/CategoriesPage'
import { LoginPage } from '../auth/pages/LoginPage'
import { RegisterPage } from '../auth/pages/RegisterPage'
// import { CartPage } from '../ecommerce/pages/CartPage'

export const AppRouter = () => {

  

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/cart' element={ <CartPage /> } />
          <Route path='/categories' element={ <CategoriesPage /> } />
          <Route path='/login' element={ <LoginPage /> } />
          <Route path='/register' element={ <RegisterPage /> } />
          
        </Routes>
      <Footer />
    </>
  )
}
