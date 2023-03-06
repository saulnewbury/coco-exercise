import { useLayoutEffect, useRef } from 'react'
import './mobile-menu.scss'

import { Link } from 'react-router-dom'

import Trifold from '../../assets/images/trifold.svg'

import gsap from 'gsap'

const MobileMenu = ({ open }) => {
  const wrapper = useRef()
  const firstTime = useRef(true)
  // const firstTime = !wrapper.current
  // const firstTime = useRef(true)

  useLayoutEffect(() => {
    if (firstTime.current) {
      firstTime.current = false
      if (open) {
        gsap.set('.row', { xPercent: -102 })
      } else {
        gsap.set('.row', { xPercent: -0 })
      }
      return
    }

    if (open) {
      gsap.fromTo(
        '.row',
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
        '.row',
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
  }, [open, firstTime])

  return (
    // ${open ? 'open' : ''}
    <div ref={wrapper} className={`mobile-menu border`}>
      <div className="mobile-menu-inner">
        <div className="row">
          <div className="nav-link border mbr">
            <Link>
              <span>La Companya</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link>
              <span>Com Participar</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link>
              <span>Premis</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link border mbr">
            <Link>
              <span>Servei Personalitzat</span>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="nav-link left border mbr">
            <Link>
              <span>Comparteix</span>
            </Link>
          </div>
          <div className="nav-link right border mbr ruta-del-comerç">
            <Link>
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
