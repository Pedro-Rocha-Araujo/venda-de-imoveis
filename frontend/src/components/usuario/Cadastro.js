import "./usuario.css"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

function Cadastro() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  async function cadastrarUsuario(e) {
    e.preventDefault()
    try { 
      const response = await axios.post("http://localhost:4000/cadastro", {
        email: email
      })
      const token = response.data.token
      localStorage.setItem("token", token)
      navigate("/casas")
      toast.success("Usuário cadastrado!")
      setEmail("")
    } catch {
      toast.error("Erro ao cadastrar o usuário!")
    }
  }

  return (
    <div className="container usuario">

      <div className="cadastro">
        <div className="header-cadastro">
          <h2>Cadastro</h2>
        </div>
        <form onSubmit={cadastrarUsuario} className="main-cadastro">
          <input 
            type="email" 
            placeholder="Digite seu Email" 
            name="email" value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required 
          />
          <button>Cadastrar</button>
        </form>
        <p>Já possui uma conta?<Link to="/login"> Fazer Login.</Link></p>
      </div>

    </div>
  );
}

export default Cadastro;