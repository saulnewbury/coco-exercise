import React from 'react'
import './la-campanya.scss'

import Market from '../../assets/images/market.webp'
import Electric from '../../assets/images/electric.webp'

const LaCampanya = () => {
  return (
    <div className="la-campanya">
      <section className="header border mbr">
        <h1>Però, què es consumir amb COCO?</h1>
        <p>
          Consumir amb consciència es tenir tota l’informació que necessites per
          poder pendre la millor decisió. A l’era del green washing és important
          tenir totes les eines per separar qui realment està preocupat per lo
          que compres i qui només t’està prenent el pel.
        </p>
      </section>
      <section className="video">
        <img className="border mbr" src={Market} alt="Market scene" />
      </section>
      <section className="manifest">
        <div className="electric mbr border">
          <img src={Electric} alt="3d electricity symbol" />
        </div>
        <div className="info mbr border">
          <h2>Manifest</h2>
          <p>
            Com a consumidor tenim molt més poder del que ens creiem. Pots de
            canviar el mon, per a millor i, malauradament, per a pitjor. Sense
            pressió, eh?
            <br />
            <br />
            El que separa un camí de l’altre es el coneixement i des de COCO
            volem que aquest coneixement estigui a l’abast de tothom per a que
            poguem prendre millors decisions i en conseqüència fer que les
            marques també actuïn amb consciència i ens donguin millors productes
            i serveis.
            <br />
            <br />
            Un futur millor encara és possible i només si anem tots a la una,
            consumidors i marques, arribarem allà. T’hi apuntes?
          </p>
        </div>
      </section>
    </div>
  )
}

export default LaCampanya
