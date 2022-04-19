import '../styles/Pokeball.css'
import Pokeball from '../img/pokeball.png'

const BtnPokeball = () => {
  return (
    <div className='btn_content'>
      <div className="poke_btn">
        <img className='pokebola' src={Pokeball} alt="Pokebola" />
        <a href="#" >go!</a>
      </div>
    </div>
  )
}

export default BtnPokeball