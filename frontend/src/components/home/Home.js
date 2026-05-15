import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./home.css"

function Home() {
  const [casas, setCasas] = useState([])
  
  useEffect(()=>{
    async function getCasas() {
      try {
        const response = await axios.get("http://localhost:4000/casas")
        setCasas(response.data)
      } catch(erro) {
        console.log("Ero ao buscar as casas no banco | Erro -> "+erro)
      }
    }
    getCasas()
  }, [])

  return (
    <section>
      <div className="container casas">

        {casas.map((casa, index)=>{
          return (
            <div key={casa._id} className="casa">
              <img src={casa.foto} />
              <div className="footer">
                <h3><Link to={`/casa/${casa._id}`} >Ver mais</Link></h3>
                <span>R$ {casa.preco}</span>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default Home