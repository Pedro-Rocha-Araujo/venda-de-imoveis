import { useState } from "react"
import { toast } from "react-toastify"
import { jwtDecode } from "jwt-decode"
import axios from "axios"
import "./card.css"

function CardProposta({fecharCard, idCasa}) {
  const [telefone, setTelefone] = useState("")
  const [mensagem, setMensagem] = useState("")
  
  const token = localStorage.getItem("token")
  const usuario = jwtDecode(token)

  async function finalizarProposta(e) {
    e.preventDefault()
    try {
      await axios.post(`http://localhost:4000/casas/${idCasa}/reserva`, {
        telefone: telefone,
        mensagem: mensagem,
        id_interessado: usuario.id
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTelefone("")
      setMensagem("")
      toast.success("Proposta enviada!")
    } catch(erro) {
      toast.error("Erro ao finalizar proposta!")
      console.log(erro)
    }
  }

  return (
    <div className="background">

      <div className="card">
        <h2><i className="fa-solid fa-phone"></i> Digite seu telefone para contato!</h2>
        <form onSubmit={finalizarProposta}>
          <input required placeholder="(00)0000-0000" 
            name="telefone" value={telefone} onChange={(e)=>setTelefone(e.target.value)}
          />

          <textarea required placeholder="Digite uma mensagem para o dono do imóvel" 
            name="mensagem" value={mensagem} onChange={(e)=>setMensagem(e.target.value)}
          />

          <button type="submit" className="enviar">Enviar</button>
          <button type="button" onClick={fecharCard} className="cancelar">Cancelar</button>
        </form>
      </div>

    </div>
  )
}

export default CardProposta