import React from 'react'
import './topbar.scss'

import Logo from '../../assets/images/brand-logo-black.svg'
import MenuToggleBtn from '../../assets/images/menu-toggle-btn.svg'
import ScannerIcon from '../../assets/images/scanner-icon.svg'
import ProfileIcon from '../../assets/images/profile-icon.svg'

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-inner mbr">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav">
          <div className="language">
            <span>ES</span> | <span>CAT</span>
          </div>
          <div className="menu-toggle-btn">
            <img src={MenuToggleBtn} alt="Menu toggle button" />
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
