import '../styles/Pokeball.css'
import Pokeball from '../img/pokeball.png'
import { Link } from 'react-router-dom'

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