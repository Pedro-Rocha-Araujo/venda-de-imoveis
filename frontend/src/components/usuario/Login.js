import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import "./usuario.css"

function Login() {
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  async function fazerLogin(e) {
    e.preventDefault() 
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email
      })
      const token = response.data.token
      localStorage.setItem("token", token)
      
      navigate("/casas")
    } catch {
      toast.error("Erro ao logar!")
    }
  }

  return (
    <div className="container usuario">

      <div className="cadastro">
        <div className="header-cadastro">
          <h2>Login</h2>
        </div>
        <form onSubmit={fazerLogin} className="main-cadastro">
          <input 
            type="email" 
            placeholder="Digite seu Email" 
            required 
            name="email" value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button>Logar</button>
        </form>
        <p>Não tem uma conta?<Link to="/cadastro"> Fazer Cadastro.</Link></p>
      </div>

    </div>
  );
}

export default Login;