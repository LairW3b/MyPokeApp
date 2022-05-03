import '../styles/Foteer.css'
import git from '../img/github.svg'
import link from '../img/Linkedin.svg'
// import face from '../img/facebook.svg'

const Fotter = () => {
  return (
    <div className='fotter_content'>
      <a 
        href="https://www.linkedin.com/in/lair-rico-g-825328199/" 
        target='_blank'
        rel="noopener"
      > 
        <img
          src={link}
          alt="logo linkedin"
          className="images"
        />
      </a>
      <a 
        href="https://github.com/LairW3b/MyPokeApp" 
        target='_blank'
        rel="noopener"
      >
        <img
          src={git}
          alt="logo github"
          className="images"
        />
      </a>
      {/* <a 
        href="https://www.facebook.com/LairW3b"
        target='_blank'
      >
        <img
          src={face}
          alt="logo facebook"
          className="images"
        />
      </a> */}
    </div>

  )
}

export default Fotter