import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import "./home.css"
import CardProposta from "../elements/CardProposta"

function Casa() {
  const [casa, setCasa] = useState({})
  const [idCard, setIdCard] = useState(null)
  const { id } = useParams()
  const token = localStorage.getItem("token")
  const usuario = jwtDecode(token).id

  useEffect(()=>{
    async function getCasa() {
      try {
        const response = await axios.get("http://localhost:4000/casa/"+id)
        setCasa(response.data)
      } catch(erro) {
        console.log("Erro ao buscar casa | Erro -> "+erro)
      }
    }
    getCasa()
  }, [id])
  
  async function fazerProposta(id) {
    try { 
      setIdCard(id)
    } catch {
      setIdCard(null)
      toast.error("Erro ao fazer proposta!")
    }
  }

  async function fecharCard() {
    try {
      setIdCard(null)
    } catch {
      toast.error("Erro!")
    }
  }

  return (
    <section>
      { idCard && (
        <CardProposta idCasa={casa._id} fecharCard={fecharCard} />
      ) }
      <div className="container">
      
        <div className="casa-maior">

          <div className="cabecalho">
            <h2><i className="fa-solid fa-envelope"></i> Proprietário: {casa.usuario?.email}</h2>
            {casa.usuario?._id === usuario && casa.status === true && (
              <i className="fa-solid fa-trash"></i>
            )}
          </div>
          
          <img src={casa.foto} />

          <div className="footer">
            <h2><i className="fa-solid fa-location-dot"></i> {casa.localizacao}</h2>
            <span>R$ {casa.preco}</span>
          </div>

          <p className="descricao">Aluga-se casa perto do centro com 150 metros quadrados, próximo à hospitais, mercados e centros logísticos</p>

          {casa.usuario?._id !== usuario && casa.status === true && (
            <button onClick={()=>fazerProposta(casa._id)} className="proposta">Fazer uma proposta.</button>
          )}
        </div>

      </div>
    </section>
  )
}

export default Casa