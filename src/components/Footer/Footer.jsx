import React from 'react'
import './footer.scss'

import Chat from '../../assets/images/socials/chat.svg'
import Instagram from '../../assets/images/socials/instagram.svg'
import TikTok from '../../assets/images/socials/tiktok.svg'
import Twitch from '../../assets/images/socials/twitch.svg'
import Discord from '../../assets/images/socials/discord.svg'

import Copyright from '../../assets/images/copyright.svg'
import LogoCityCouncil from '../../assets/images/logo-city-council.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="info border mbr">
          <div className="la-campanya">
            <div className="title">
              <h3>La Campanya</h3>
            </div>
            <div className="links">
              <p>La Campanya</p>
              <p>El Manifest</p>
            </div>
          </div>
          <div className="com-participar">
            <div className="title">
              <h3>Com Participar</h3>
            </div>
            <div className="links">
              <p>Scanejar Productes</p>
              <p>Serveis a Barcelona</p>
              <p>Apps</p>
              <p>Ruta de Comerç Responsable</p>
            </div>
          </div>
          <div className="premis">
            <div className="title">
              <h3>Premis</h3>
            </div>
            <div className="links">
              <p>Crédits Ambientals</p>
              <p>Guanyadors</p>
            </div>
          </div>
          <div className="servei-personalitzat">
            <div className="title">
              <h3>Servei Personalitzat</h3>
            </div>
            <div className="links">
              <p>Qüestionari</p>
            </div>
          </div>
          <div className="comparteix">
            <div className="title">
              <h3>Comparteix</h3>
            </div>
            <div className="links">
              <p>Mems</p>
              <p>Stickers</p>
              <div className="icons">
                <img src={Chat} alt="chat" />
                <img src={Instagram} alt="instagram" />
                <img src={TikTok} alt="tiktok" />
                <img src={Twitch} alt="twitch" />
                <img src={Discord} alt="Discord" />
              </div>
            </div>
          </div>
          <div className="perfil">
            <div className="title">
              <h3>Perfil</h3>
            </div>
            <div className="links">
              <p>Registra't</p>
              <p>Accedeix</p>
            </div>
          </div>
        </div>
        <div className="brand border mbr">
          <div className="brand-inner">
            <img src={Copyright} alt="copyright" />
            <img src={LogoCityCouncil} alt="City council logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
