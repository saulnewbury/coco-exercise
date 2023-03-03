import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'

import Topbar from '../Topbar/Topbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div className="layout border">
      <Outlet />
      <div className="black-strip"></div>
      <Topbar />
      <Footer />
    </div>
  )
}

export default Layout
