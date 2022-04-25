import '../styles/Card.css'
import cubone from '../img/cubone.png'

const Card = () => {
  return (
    <div className="card_content">
      {/* Div boton */}
      <div className="btn_content_close">
        <div className='btn_close'>
          <a href="#">x</a>
        </div>
      </div>
      {/* nombre y hp pokemon */}
      <div className="head_card">
        <h3>Cubone</h3>
        <p>120 hp</p>
      </div>
      {/* imagen card */}
      <div className="fondo_poke">
        <img className='pokemon' src={cubone} alt="cubone" />
      </div>
      {/* Informacion del pokemon */}
      <div className='poke_info'>
        <div className="titulos">
          <p>Altura</p>
          <p>Tipo</p>
        </div>
        <div className="info">
          <p>0.4</p>
          <p>Solita</p>
        </div>
        <div className="titulos">
          <p>Peso</p>
          <p>Habilidad</p>
        </div>
        <div className='info'>
          <p>6.5 kg</p>
          <p>Cabeza Roca</p>
        </div>
        <div className='titulos'>
          <p>Sexo</p>
        </div>
        <div className='info'>
          <p>Macho</p>
        </div>
      </div>
    </div>
  )
}

export default Card