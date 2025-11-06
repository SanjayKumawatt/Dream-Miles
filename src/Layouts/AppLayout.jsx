import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import ScrollToTop from '../Components/ScrollToTop'

const AppLayout = () => {
  return (
    <div>
      <ScrollToTop/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AppLayout