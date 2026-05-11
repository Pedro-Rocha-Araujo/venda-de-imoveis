import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { toast } from "react-toastify"
import "./perfil.css"

function Perfil() {
  const [minhasCasas, setMinhasCasas] = useState([])
  const navigate = useNavigate()

  function redirecionar(rota) {
    navigate(`/${rota}`)
  }

  function deslogarUsuario() {
    try {
      localStorage.removeItem("token")
      toast.success("Deslogado com sucesso!")
      navigate(0)
    } catch {
      toast.error("Erro ao sair da conta!")
    }
  }

  return (
    <div className="container">
      <div className="dados">
        <label>Email: </label>
        <input value={"teste@teste.com"} disabled />
      </div>
      <div className="casas-perfil">
        <h2><i className="fa-solid fa-house"></i> Suas Casas</h2>
        <div className="casas-cadastradas">
          { minhasCasas.length === 0 ? (
            <p>Nenhuma casa Cadastrada ainda!</p>
          ): (
            <p>Cas</p>
          ) }
        </div>
        <button onClick={()=>redirecionar("nova-casa")} className="cadastrar">
          Cadastrar casa
        </button>
      </div>
      <button onClick={deslogarUsuario} className="sair">Sair</button>
    </div>
  );
}

export default Perfil;