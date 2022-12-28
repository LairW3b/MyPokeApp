import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../img/pokeball.webp'
import '../styles/Pokeball.css'

const BtnPokeball = () => {
  return (
      <div className='btn_content'>
        <div className="poke_btn">
          <img 
            className='pokebola' 
            src={Pokeball} 
            alt="Pokebola" 
          />
          <Link to='/principal' >go!</Link>
        </div>
      </div>
  )
}

export default BtnPokeball
