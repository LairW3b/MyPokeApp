import Pokelogo from '../img/pokelogo.webp'
import Charizard from '../img/Charizard.webp'
import '../styles/Inicio.css'
import BtnPokeball from './BtnPokeball'

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