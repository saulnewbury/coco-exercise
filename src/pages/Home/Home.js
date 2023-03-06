import React from 'react'
import './home.scss'

import Number1 from '../../assets/images/numbers/number-1.svg'
import Number2 from '../../assets/images/numbers/number-2.svg'
import Number3 from '../../assets/images/numbers/number-3.svg'
import Number4 from '../../assets/images/numbers/number-4.svg'
import Number5 from '../../assets/images/numbers/number-5.svg'

import Union from '../../assets/images/photos/union.jpg'
import Jump from '../../assets/images/photos/jump.jpg'
import ManWithDog from '../../assets/images/photos/man-with-dog.jpg'
import Woman from '../../assets/images/photos/woman.jpg'
import ManWearingGlasses from '../../assets/images/photos/man-wearing-glasses.jpg'

const arr = [
  { numImg: Number1, title: 'Compra amb consciència', img: Union },
  { numImg: Number2, title: 'Com participar a la campanya?', img: Jump },
  { numImg: Number3, title: 'Fer servir el COCO té premi', img: ManWithDog },
  { numImg: Number4, title: 'Servei personalitzat', img: Woman },
  { numImg: Number5, title: "Comparteix l'amor", img: ManWearingGlasses }
]
// image, text, number, video

const Home = () => {
  console.log(Array.from({ length: 3 }))
  return (
    <div className="home border mbr">
      <div className="home-inner">
        <h1>Som COCO</h1>
        <h2>la plataforma per als consumidors amb consciència</h2>
        <p>
          Si també ho ets, fes un cop d’ull al que pots fer per ser part de la
          revolució amb COCO. Que de planetes només en tenim d’un.
        </p>
        <div className="explained">
          <div className="explained-inner">
            {arr.map((el, idx) => (
              <div
                key={`${el + idx}`}
                className={`item ${idx % 2 === 0 ? 'odd' : ''}`}
              >
                <div className="heading">
                  <div className="number">
                    <img src={el.numImg} alt="Number corrosponding to part" />
                  </div>
                  <div className="title">
                    <h3>{el.title}</h3>
                  </div>
                </div>
                <div className="video-link">
                  <img className="border" src={el.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
