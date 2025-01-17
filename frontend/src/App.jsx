import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import History from './components/History'

function App() {

  return (
      <>
        <Toaster/>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/history" element={<History />} />
            </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
