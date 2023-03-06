import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'

import Topbar from '../Topbar/Topbar'
import Footer from '../Footer/Footer'
import MobileMenu from '../MobileMenu/MobileMenu'

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false)

  function toggleMobileMenu(e) {
    if (e.currentTarget.dataset.el === 'logo' && !isVisible) return
    setIsVisible(!isVisible)
  }

  return (
    <div className="layout border">
      <div className="black-strip"></div>
      <Topbar isVisible={isVisible} toggleMobileMenu={toggleMobileMenu} />
      <Outlet />
      <Footer />
      <MobileMenu isVisible={isVisible} toggleMobileMenu={toggleMobileMenu} />
    </div>
  )
}

export default Layout
