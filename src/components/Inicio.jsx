import Pokelogo from '../img/pokelogo.png'
import Charizard from '../img/Charizard.png'
import '../styles/Inicio.css'
import BtnPokeball from './BtnPokeball'

const Inicio = () => {
  return (
    <div className='inicio'>
        {/* <img src={Charizard} alt="Charizard" className="charizard" /> */}
      <div className="poke-image">
        <img src={Pokelogo} alt="logo pokemon" className="pokelogo" />
        <BtnPokeball />
      </div>

    </div>
  )
}

export default Inicio