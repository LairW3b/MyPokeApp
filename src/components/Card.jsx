import '../styles/Card.css'
import cubone from '../img/cubone.png'

const Card = ({id, name, hp, img, height, type, weight, ability, closeCard}) => {
  
  return (
    <div className="card_content">
      {/* Div boton */}
      <div className="btn_content_close">
        {/* <div > */}
          <button className='btn_close'onClick={()=>closeCard(id)}>x</button>
        {/* </div> */}
      </div>
      {/* nombre y hp pokemon */}
      <div className="head_card">
        <h3>{name}</h3>
        <p>{hp} hp</p>
      </div>
      {/* imagen card */}
      <div className="fondo_poke">
        <img className='pokemon' src={img} alt="cubone" />
      </div>
      {/* Informacion del pokemon */}
      <div className='poke_info'>
        <div className="titulos">
          <p>Altura</p>
          <p>Tipo</p>
        </div>
        <div className="info">
          <p>{height} dm</p>
          <p>{type}</p>
        </div>
        <div className="titulos">
          <p>Peso</p>
          <p>Habilidad</p>
        </div>
        <div className='info'>
          <p>{weight} hg</p>
          <p>{ability}</p>
        </div>
        {/* <div className='titulos'>
          <p>Sexo</p>
        </div>
        <div className='info'>
          <p>Macho</p>
        </div> */}
      </div>
    </div>
  )
}

export default Card