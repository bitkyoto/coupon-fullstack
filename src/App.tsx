import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import LoginPage from './pages/LoginPage'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ShopPage from './pages/ShopPage'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/'         element={<HomePage />}  />
            <Route path='/login'    element={<LoginPage/>} />
            <Route path="/shop/:id" element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      
    </>
  )
}

export default App
