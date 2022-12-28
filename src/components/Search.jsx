import React, { useState } from 'react'
import '../styles/Search.css' 

const Search = ({ onSearch }) => {

  const [pokemon, setPokemon] = useState('')

  return (
    <>
      <form 
        onSubmit={(e)=>{
          e.preventDefault()
          onSearch(pokemon.toLocaleLowerCase())
          setPokemon('')
        }}
        className='formulario' 
      >
        <input 
          type="text" 
          className="search" 
          placeholder='Catch them!!!'
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button className='btn' type='submit'>go</button>
      </form>
    </>
  )
}

export default Search
