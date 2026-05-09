import "./formularios.css"

function NovaCasa() {
  return (
    <div className="container nova-casa">
      <h2>Cadastrar Casa!</h2>
      <form className="nova-casa">
        <div className="input-file">
          <input type="file" required placeholder="" />
          <p><i className="fa-solid fa-arrow-up-from-bracket"></i> Foto da casa</p>
        </div>
        <input type="number" required placeholder="Valor da mensalidade R$ 0000,00" />
        <input type="text" required placeholder="Endereço da casa" />
        <textarea required placeholder="Descrição da casa"></textarea>
        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default NovaCasa;