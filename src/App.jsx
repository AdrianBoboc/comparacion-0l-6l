// import { useState } from 'react'
import './App.css'
import './algo.css'

import weaponJSON from './API_COPIADA_WEAPON.json'

const MAX_PRICE_6L = 50
const BLACK_MORRIGAN_VALUE = 0

function App () {
  const armas = JSON.stringify(weaponJSON)
  const armasJsoned = JSON.parse(armas)
  /* console.log('--------------------------------PRE---------------------------------------')
  console.log(armasJsoned)

  for (let i = 0; i < armasJsoned.length; i++) {
    if (armasJsoned[i].detailsId.includes('relic')) {
      console.log(armasJsoned[i])
      armasJsoned.splice(i, 1)
    }
  } */

  for (let i = 0; i < armasJsoned.length; i++) {
    delete armasJsoned[i].itemClass
    delete armasJsoned[i].sparkline
    delete armasJsoned[i].baseType
    delete armasJsoned[i].lowConfidenceSparkline
    delete armasJsoned[i].implicitModifiers
    delete armasJsoned[i].explicitModifiers
    delete armasJsoned[i].flavourText
    delete armasJsoned[i].exaltedValue
    delete armasJsoned[i].count
    delete armasJsoned[i].tradeInfo
    delete armasJsoned[i].listingCount
    delete armasJsoned[i].levelRequired

    if (armasJsoned[i].divineValue > MAX_PRICE_6L ||
      armasJsoned[i]?.itemType === 'Gloves' ||
      armasJsoned[i]?.itemType === 'Boots' ||
      armasJsoned[i]?.itemType === 'Shield' ||
      armasJsoned[i]?.itemType === 'Helmet' ||
      armasJsoned[i]?.itemType === 'Quiver' ||
      armasJsoned[i]?.detailsId.includes('5l') ||
      armasJsoned[i]?.name === "Yriel's Fostering" ||
      armasJsoned[i]?.name === "Atziri's Splendour" ||
      armasJsoned[i]?.name === "Kaom's Heart" ||
      armasJsoned[i]?.name === "Replica Kaom's Heart" ||
      armasJsoned[i]?.name === 'Replica Shroud of the Lightless' ||
      armasJsoned[i]?.name === 'Shroud of the Lightless' ||
      armasJsoned[i]?.name === 'Skin of the Loyal' ||
      armasJsoned[i]?.name === 'Tabula Rasa' ||
      armasJsoned[i]?.name === 'Sporeguard' ||
      armasJsoned[i]?.name === 'The Admiral' ||
      armasJsoned[i]?.name === 'The Eternity Shroud') {
      delete armasJsoned[i]
    }
  }

  armasJsoned.sort(function (a, b) {
    if (a.name < b.name) { return -1 }
    if (a.name > b.name) { return 1 }
    return 0
  })

  const paresConDiferencia = armasJsoned.reduce((acc, arma, index) => {
    if (index % 2 === 0) {
      const siguienteArma = armasJsoned[index + 1]
      const diferenciaChaosValue = Math.abs(arma.chaosValue - siguienteArma.chaosValue)
      acc.push({
        arma1: arma,
        arma2: siguienteArma,
        diferenciaChaosValue
      })
    }
    return acc
  }, [])

  paresConDiferencia.sort((a, b) => b.diferenciaChaosValue - a.diferenciaChaosValue)

  /* for (let i = 0; i < armasJsoned.length; i++) {
    if (armasJsoned[i].detailsId.includes('relic')) {
      console.log(armasJsoned[i])
      armasJsoned.splice(i, 1)
    }
  }

  for (let i = 0; i < armasJsoned.length; i++) {
    if (armasJsoned[i].detailsId.includes('relic')) {
      console.log(armasJsoned[i])
      armasJsoned.splice(i, 1)
    }
  }

  console.log('--------------------------------POST---------------------------------------')
  console.log(armasJsoned) */
  return (
    <>
      <h1>The Black Morrigan value now: {BLACK_MORRIGAN_VALUE}</h1>
      <table className='table'>
        <tbody>

          {
            armasJsoned.map((arma, index) => (
              index % 2 === 0 && (
                <tr key={index}>
                  <td>
                    {/* Render the first object */}
                    <div>
                      <img src={arma.icon} alt={arma.name} />
                      <p>{arma.name}</p>
                      <p>{arma.detailsId}</p>
                      <p>{arma.type}</p>
                      <p>
                        {arma.chaosValue}
                        <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' alt='Chaos Value' />
                      </p>
                      <p>
                        {arma.divineValue}
                        <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' alt='Divine Value' />
                      </p>
                    </div>
                  </td>
                  {armasJsoned[index + 1] && (
                    <td>
                      {/* Render the second object */}
                      <div>
                        <img src={armasJsoned[index + 1].icon} alt={armasJsoned[index + 1].name} />
                        <p>{armasJsoned[index + 1].name}</p>
                        <p>{armasJsoned[index + 1].detailsId}</p>
                        <p>{armasJsoned[index + 1].type}</p>
                        <p>
                          {armasJsoned[index + 1].chaosValue}
                          <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' alt='Chaos Value' />
                        </p>
                        <p>
                          {armasJsoned[index + 1].divineValue}
                          <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' alt='Divine Value' />
                        </p>
                      </div>
                    </td>
                  )}
                </tr>
              )
            ))
          }

          {
            /* armasJsoned.map((arma, i) =>
              <tr key={armasJsoned.id}>
                <td><img src={arma.icon} /></td>
                <td>{arma.name}</td>
                <td>{arma.detailsId}</td>
                <td>{arma.type}</td>
                <td>
                  {arma.chaosValue}
                  <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lSZXJvbGxSYXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d119a0d734/CurrencyRerollRare.png' />
                </td>
                <td>
                  {arma.divineValue}
                  <img src='https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQ3VycmVuY3kvQ3VycmVuY3lNb2RWYWx1ZXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/e1a54ff97d/CurrencyModValues.png' />
                </td>
              </tr>
            ) */
          }
        </tbody>
      </table>
    </>
  )
}

export default App
