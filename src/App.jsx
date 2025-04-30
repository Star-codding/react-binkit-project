import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Common/Header'
import Banner from './Banner'
import Slider from './Slider'
import Footer from './Common/Footer'

export default function App() {
  return (
    <>
    
      
        <Routes>

          <Route path="/" element={
            <>
              <Header />
              <Banner />
              <Slider />
              <Footer />
            </>
          }>
          </Route>
        </Routes>
          
    </>
  )
}

