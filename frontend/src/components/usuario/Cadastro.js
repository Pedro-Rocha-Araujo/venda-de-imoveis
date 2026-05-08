import "./usuario.css"
import { Link } from "react-router-dom"

function Cadastro() {
  return (
    <div className="container usuario">

      <div className="cadastro">
        <div className="header-cadastro">
          <h2>Cadastro</h2>
        </div>
        <form className="main-cadastro">
          <input type="email" placeholder="Digite seu Email" required />
        </form>
        <p>Já possui uma conta?<Link to="/login"> Fazer Login.</Link></p>
      </div>

    </div>
  );
}

export default Cadastro;