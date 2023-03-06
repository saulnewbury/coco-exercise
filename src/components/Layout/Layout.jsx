import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'

import Topbar from '../Topbar/Topbar'
import Footer from '../Footer/Footer'
import MobileMenu from '../MobileMenu/MobileMenu'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMobileMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="layout border">
      <div className="black-strip"></div>
      <Topbar toggleMobileMenu={toggleMobileMenu} />
      <Outlet />
      <Footer />
      <MobileMenu open={isOpen} />
    </div>
  )
}

export default Layout
