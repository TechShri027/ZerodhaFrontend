import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './landingPage/Navbar.jsx'
import Footer from './landingPage/Footer.jsx'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './landingPage/Home/Homepage.jsx'
import Signup from './landingPage/Signup/Signup.jsx'
import PricingPage from './landingPage/Pricing/PricingPage.jsx'
import AboutPage from './landingPage/About/AboutPage.jsx'
import ProductPage from './landingPage/Products/ProductPage.jsx'
import SupportPage from './landingPage/Supports/SupportPage.jsx'
import NotFound from './landingPage/NotFound.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path='/' element={<Homepage/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/About' element={<AboutPage/>}></Route>
  <Route path='/Products' element={<ProductPage/>}></Route>
  <Route path='/Pricing' element={<PricingPage/>}></Route>
  <Route path='/Supports' element={<SupportPage/>}></Route>
  <Route path='*' element={<NotFound/>}></Route>
 </Routes>
 <Footer/>
 </BrowserRouter>
)
