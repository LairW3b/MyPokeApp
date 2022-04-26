import { Link } from 'react-router-dom'
import pokelogo from '../img/pokelogo.png'
import '../styles/Layout.css'
import Search from './Search'
import Card from './Card'
import Fotter from './Fotter'
import Error from './Error'
import { useState } from 'react'
import Default from './Default'
import { capitalLetter } from '../helpers'

const Layout = () => {

  const [pokemones, setPokemones] = useState([])
  const [error, setError] = useState(false)

  const onSearch = async (name) => {
    try {

      const url = `https://pokeapi.co/api/v2/pokemon/${name}`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      if (resultado) {
        const pokemon = {
          id: resultado.id,
          name: capitalLetter(resultado.name),
          hp: resultado.stats[0].base_stat,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${resultado.id}.png`,
          height: resultado.height,
          type: capitalLetter(resultado.types[0].type.name),
          weight: resultado.weight,
          ability: capitalLetter(resultado.abilities[0].ability.name)
        }
        console.log(typeof(pokemon.height));
        setError(false)
        setPokemones(oldPokemones => [...oldPokemones, pokemon])
      }
    } catch {
      setError(true)
      // console.log('error')
    }
  }

  const closeCard = id => {
    const arrayPoke = pokemones.filter(pokemon => pokemon.id !== id)
    setPokemones(arrayPoke)
  }



  return (
    <div className="layout">
      <Link to='/'>
        <img
          className='pokelogo_layout'
          src={pokelogo}
          alt="Pokelogo" />
      </Link>
      <Search
        onSearch={onSearch}
      />

      {error ? (
        <Error />
      ) : (
        pokemones.length === 0 ? (
          <Default closeCard={closeCard} />
        ) : (pokemones.map(p =>
          <Card
            key={p.id}
            id={p.id}
            name={p.name}
            hp={p.hp}
            img={p.img}
            height={p.height}
            type={p.type}
            weight={p.weight}
            ability={p.ability}
            closeCard={closeCard}
          />
        ))
      )}


      <Fotter />
    </div>
  )
}

export default Layout 