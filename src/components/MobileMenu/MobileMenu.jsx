import { useLayoutEffect, useRef } from 'react'
import './mobile-menu.scss'

import { Link } from 'react-router-dom'

import Trifold from '../../assets/images/trifold.svg'

import gsap from 'gsap'

const MobileMenu = ({ isVisible, toggleMobileMenu }) => {
  const wrapper = useRef()
  const q = gsap.utils.selector(wrapper)
  const firstTime = useRef(true)
  // const firstTime = !wrapper.current
  // const firstTime = useRef(true)

  useLayoutEffect(() => {
    if (firstTime.current) {
      firstTime.current = false
      if (isVisible) {
        gsap.set(q('.row'), { xPercent: -0 })
      } else {
        gsap.set(q('.row'), { xPercent: -102 })
      }
      return
    }

    if (isVisible) {
      gsap.fromTo(
        q('.row'),
        { xPercent: -102 },
        {
          xPercent: 0,
          stagger: { stagger: 0.05, amount: 0.4 }
        }
      )
      gsap.to('.mobile-menu', {
        backgroundColor: 'hsla(0, 0%, 0%, 1)'
      })
    } else {
      gsap.fromTo(
        q('.row'),
        { xPercent: 0 },
        {
          xPercent: -102,
          stagger: { stagger: 0.005, amount: 0.4 }
        }
      )
      gsap.to('.mobile-menu', {
        backgroundColor: 'hsla(0, 0%, 0%, 0)'
      })
    }
  }, [isVisible, firstTime])

  return (
    // ${open ? 'open' : ''}
    <div ref={wrapper} className={`mobile-menu border`}>
      <div className="mobile-menu-inner">
        <div className="row">
          <div className="nav-link border mbr">
            <Link to="la-campanya" onClick={toggleMobileMenu} className="link">
              <span>La Companya</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link className="link">
              <span>Com Participar</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link className="link">
              <span>Premis</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link className="link">
              <span>Servei Personalitzat</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link left border mbr">
            <Link className="link">
              <span>Comparteix</span>
            </Link>
          </div>
          <div className="nav-link right border mbr ruta-del-comerç">
            <Link className="link">
              <span>
                <img src={Trifold} alt="Trifold Icon" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
