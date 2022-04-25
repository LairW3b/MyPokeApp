import '../styles/Search.css' 

const Search = () => {
  return (
    <>
      <form className='formulario' >
        <input type="text" className="search" placeholder='Catch them!!!'/>
        <button className='btn' type='submit'>go</button>
      </form>
    </>
  )
}

export default Search