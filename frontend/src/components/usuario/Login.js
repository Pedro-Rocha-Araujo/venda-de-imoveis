import "./usuario.css"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="container usuario">

      <div className="cadastro">
        <div className="header-cadastro">
          <h2>Login</h2>
        </div>
        <form className="main-cadastro">
          <input type="email" placeholder="Digite seu Email" required />
          <button>Logar</button>
        </form>
        <p>Não tem uma conta?<Link to="/cadastro"> Fazer Cadastro.</Link></p>
      </div>

    </div>
  );
}

export default Login;