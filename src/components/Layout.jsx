import { Link } from 'react-router-dom'
import pokelogo from '../img/pokelogo.png'
import '../styles/Layout.css'
import Search from './Search'
import Card from './Card'
import Fotter from './Fotter'

const Layout = () => {
  return (
    <div className="layout">
      <Link to='/'>
        <img 
          className='pokelogo_layout' 
          src={pokelogo} 
          alt="Pokelogo"/>
      </Link>
      <Search/>
      <Card/>
      <Fotter/>
    </div>
  )
}

export default Layout 