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
import App from './App.jsx'
import Payment from './Payment.jsx'
import ContextProvider from './ContextProvider.jsx'
import Cart from './Cart.jsx'

createRoot(document.getElementById('root')).render(
 <ContextProvider>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/section" element={<Section/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    </ContextProvider>
)
