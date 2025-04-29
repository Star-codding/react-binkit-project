import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Header from './Common/Header.jsx'
import Section from './Section.jsx'
import Banner from './Banner.jsx'
import Slider from './Slider.jsx'
import Footer from './Common/Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Product.jsx'
import PageNotFound from './PageNotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
          {/* <App/> */}
          <Header/>
          <Banner/>
          <Slider/>
          <Footer/>
          </>
        }/>

        <Route path="/section" element={
          <>
          <Section/>
          </>
        } />


      <Route path='/product/:id' element={
          <>
          <Product/>
          </>

        } />

        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      



      </BrowserRouter>

  </StrictMode>,
)
