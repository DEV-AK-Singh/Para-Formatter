import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Base/Header.jsx'
import TextForm from './components/Home/TextForm.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Explore from './components/Explore/Explore'
import Footer from './components/Base/Footer'

function App() {
  const baseTitle = "Para Formatter";
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/explore' element={<Explore title={baseTitle+" | Explore"}/>}/>
        <Route path='/contact' element={<Contact title={baseTitle+" | Contact"}/>}/>
        <Route path='/about' element={<About title={baseTitle+" | About"}/>}/>
        <Route path='/' element={<Home title={baseTitle+" | Home"}/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App