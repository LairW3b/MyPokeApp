import React from 'react'
import Pokelogo from '../img/pokelogo.webp'
import Charizard from '../img/Charizard.webp'
import BtnPokeball from './BtnPokeball'
import '../styles/Inicio.css'

const Inicio = () => {
  return (
    <div className='inicio'>
      <img src={Charizard} alt="Charizard" className="charizard" />
      <div className="poke-image">
        <img src={Pokelogo} alt="logo pokemon" className="pokelogo" />
        <div></div>
        <BtnPokeball />
      </div>
    </div>
  )
}

export default Inicio
