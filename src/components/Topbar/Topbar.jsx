import { useEffect, useRef } from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom'

import gsap from 'gsap'

import Logo from '../../assets/images/brand-logo-black.svg'
import MenuToggleBtn from '../../assets/images/menu-toggle-btn.svg'
import ScannerIcon from '../../assets/images/scanner-icon.svg'
import ProfileIcon from '../../assets/images/profile-icon.svg'

const Topbar = ({ toggleMobileMenu, isVisible }) => {
  const cross = useRef()

  useEffect(() => {
    if (!isVisible) {
      gsap.to(cross.current, { rotate: 0 })
      gsap.to(cross.current, {
        yPercent: -10,
        repeat: 1,
        yoyo: 2,
        duration: 0.2
      })
    } else {
      gsap.to(cross.current, { rotate: 225 })
      gsap.to(cross.current, {
        yPercent: -10,
        repeat: 1,
        yoyo: 2,
        duration: 0.2
      })
    }
  }, [isVisible])

  return (
    <div className="topbar">
      <div className="topbar-inner mbr">
        <div className="logo">
          <Link to="/" onClick={toggleMobileMenu} data-el="logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav">
          <div className="language">
            <span>ES</span> | <span>CAT</span>
          </div>
          <div className="menu-toggle-btn">
            <img
              ref={cross}
              src={MenuToggleBtn}
              alt="Menu toggle button"
              onClick={e => {
                toggleMobileMenu(e)
              }}
            />
          </div>
          <div className="document-scanner">
            <img src={ScannerIcon} alt="Scanner Icon" />
          </div>
          <div className="profile">
            <img src={ProfileIcon} alt="Profile Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
