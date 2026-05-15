import "./card.css"
import { useState, useEffect } from "react"
import axios from "axios"

function PreviewProposta({fechar, id}) {
  const [itemPreview, setItemPreview] = useState()
  console.log(itemPreview)
  useEffect(()=>{
    async function buscarId() {
      try {
        const response = await axios.get("http://localhost:4000/reserva/"+id)
        setItemPreview(response.data)
      } catch(erro) {
        console.log("Erro ao buscar o item do preview | Erro -> "+erro)
      }
    }
    buscarId()
  }, [id])

  return (
    <div className="background">
      <div className="card">
        <h2><i className="fa-solid fa-envelope"></i> Remetente: {itemPreview?.interessado.email}</h2>

        <div className="casa">
          <img src={itemPreview?.casa.foto} />
        </div>

        <h3><i className="fa-solid fa-phone"></i> Telefone: {itemPreview?.telefone}</h3>
        <p><strong>Mensagem:</strong> {itemPreview?.mensagem}</p>
        <button onClick={fechar} className="cancelar centro">Fechar</button>
      </div>
    </div>
  )
}

export default PreviewProposta