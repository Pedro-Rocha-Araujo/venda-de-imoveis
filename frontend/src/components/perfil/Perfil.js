import { useState } from "react"
import "./perfil.css"

function Perfil() {
  const [minhasCasas, setMinhasCasas] = useState([])
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
        <button className="cadastrar">Cadastrar casa</button>
      </div>
      <button className="sair">Sair</button>
    </div>
  );
}

export default Perfil;