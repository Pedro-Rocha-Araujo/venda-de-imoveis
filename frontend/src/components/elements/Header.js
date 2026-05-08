import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <h1><Link to="/casas"><i className="fa-solid fa-house"></i> Imobiliária</Link></h1>   
        <Link to="/perfil">
          <i className="fa-solid fa-user fa-2xl"></i>    
        </Link>
      </div>
    </header>
  )
}

export default Header