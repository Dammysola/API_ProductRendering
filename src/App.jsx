import React from 'react'
import API from './components/API'
// import ProductDetails from './components/ProductDetailsCom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetailsOne from './components/ProductDetails'
// import Card from './components/Card'
// import Nav from './components/NavBar'

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
      {/* <Nav/> */}
        <Routes>
          <Route path='/'  element={<API/>}/>
          <Route path='/product' element={<ProductDetailsOne/>}/>
          
        </Routes>
      </BrowserRouter>
      {/* <Nav/> */}
      
    </div>
  )
}

export default App