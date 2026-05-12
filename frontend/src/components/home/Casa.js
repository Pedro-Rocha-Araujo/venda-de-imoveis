import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import "./home.css"

function Casa() {
  const [casa, setCasa] = useState({})
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

  return (
    <section>
      <div className="container">
      
        <div className="casa-maior">
        
          <img src={casa.foto} />

          <div className="footer">
            <h2><i className="fa-solid fa-location-dot"></i> {casa.localizacao}</h2>
            <span>R$ {casa.preco}</span>
          </div>

          <p className="descricao">Aluga-se casa perto do centro com 150 metros quadrados, próximo à hospitais, mercados e centros logísticos</p>

          {casa.usuario !== usuario && (
            <button className="proposta">Fazer uma proposta.</button>
          )}
        </div>

      </div>
    </section>
  )
}

export default Casa