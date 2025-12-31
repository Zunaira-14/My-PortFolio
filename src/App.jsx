import React from 'react'
import NavBar from './components/NavBar'
import Home from './section/Home'
import { HelmetProvider } from "react-helmet-async";
import {  Routes, Route } from "react-router-dom";
import Projects from './section/Projects';
import About from './section/About';
import ScrollToTop from "./components/ScrollToTop";

import Footer from './components/Footer'
import Contact from './section/Contact';

const App = () => {
  return (
  
    <HelmetProvider>
              <ScrollToTop />
      <NavBar/>
     
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    <Footer/>

    </HelmetProvider>
    
  )
}

export default App


