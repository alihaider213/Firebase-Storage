import React from 'react'
import { Routes, Route } from "react-router-dom"

import Header from "pages/Frontend/components/Header"
import Footer from "pages/Frontend/components/Footer"

import Home from "pages/Frontend/Home"
import About from "pages/Frontend/About"


export default function index() {
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>

        </Routes>

      </main>
      <Footer />
    </>
  )
}
