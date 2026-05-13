import "./card.css"

function CardProposta({fecharCard}) {
  return (
    <div className="background">
      <div className="card">
        <h2><i class="fa-solid fa-phone"></i> Digite seu telefone para contato!</h2>
        <form>
          <input required placeholder="(00)0000-0000"></input>
          <button type="submit" className="enviar">Enviar</button>
          <button type="button" onClick={fecharCard} className="cancelar">Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default CardProposta