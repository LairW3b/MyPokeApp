import '../styles/Error.css'
import sad from '../img/pikaSad.png'

const Error = () => {
  return (
    <div className='content_error'>
      <h2
        className='error_title'
      >Pokemon no encontrado
      </h2>
      <img src={sad} alt="pikachu sad" className="sad" />
    </div>
  )
}

export default Error