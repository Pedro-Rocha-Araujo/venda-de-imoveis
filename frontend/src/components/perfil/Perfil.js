import "./perfil.css"

function Perfil() {
  return (
    <div className="container">
      <div className="dados">
        <label>Email: </label>
        <input value={"teste@teste.com"} disabled />
      </div>
      <div className="casas-perfil">
        <h2><i className="fa-solid fa-house"></i> Suas Casas</h2>
        <div className="casas-cadastradas">

        </div>
      </div>
      <button className="sair">Sair</button>
    </div>
  );
}

export default Perfil;