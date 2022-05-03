import { useState, useEffect } from 'react'
import { capitalLetter } from '../helpers'
import Card from './Card'

const Default = () => {

  const [poke, setPoke] = useState([])

  useEffect(() => {
    const cubone = async () => {

      const url = `https://pokeapi.co/api/v2/pokemon/cubone`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      
      const poke = {
        id: resultado.id,
        name: capitalLetter(resultado.name),
        hp: resultado.stats[0].base_stat,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${resultado.id}.png`,
        height: resultado.height,
        type: capitalLetter(resultado.types[0].type.name),
        weight: resultado.weight,
        ability: capitalLetter(resultado.abilities[0].ability.name)
      }
      setPoke(poke)
      // console.log(poke);
    }
    cubone()
  }, [])

  return (
    <div>
      <Card
        key={poke.id}
        id={poke.id}
        name={poke.name}
        hp={poke.hp}
        img={poke.img}
        height={poke.height}
        type={poke.type}
        weight={poke.weight}
        ability={poke.ability}
      />
    </div>
  )
}

export default Default