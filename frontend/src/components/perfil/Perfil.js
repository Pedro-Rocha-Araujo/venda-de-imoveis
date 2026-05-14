import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "react-toastify"
import { jwtDecode } from "jwt-decode"
import axios from "axios"
import "./perfil.css"
import PreviewProposta from "../elements/PreviewProposta"

function Perfil() {
  const [minhasCasas, setMinhasCasas] = useState([])
  const [minhasPropostas, setMinhasPropostas] = useState([])
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const usuario = jwtDecode(token)

  useEffect(()=>{
    async function getMinhasCasas() {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get("http://localhost:4000/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setMinhasCasas(response.data)
      } catch(erro) {
        console.log("Erro ao buscar suas casas | Ero -> "+erro)
      }
    }
    async function getMinhasPropostas() {
      try {
        const response = await axios.get("http://localhost:4000/reservas", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setMinhasPropostas(response.data)
      } catch(erro) {
        console.log("Erro ao buscar as propostas | Erro -> "+erro)
      }
    }
    getMinhasCasas()
    getMinhasPropostas()
  }, [])

  async function deletarCasa(id) {
    try {
      await axios.delete("http://localhost:4000/casas/"+id)
      navigate(0)
    } catch {
      toast.error("Erro ao deletar Casa")
    }
  }

  function redirecionar(rota) {
    navigate(`/${rota}`)
  }

  function deslogarUsuario() {
    try {
      localStorage.removeItem("token")
      navigate(0)
    } catch {
      toast.error("Erro ao sair da conta!")
    }
  }

  function abrirPreview(id) {
    try {
      setPreview(id)
    } catch {
      toast.error("Erro ao abrir proposta!")
    }
  }

  function fecharPreview() {
    setPreview(null)
  }

  return (
    <div className="container">
      { preview && (
        <PreviewProposta id={preview} fechar={fecharPreview} />
      ) }
      <div className="dados">
        <label>Email: </label>
        <input value={usuario?.email} disabled />
      </div>

      <div className="casas-perfil">
        <h2><i className="fa-solid fa-house"></i> Suas Casas</h2>

        <div className="casas-cadastradas">
          { minhasCasas.length === 0 ? (
            <p>Nenhuma casa Cadastrada ainda!</p>
          ): (
            minhasCasas.map((casa, index)=>{
              return (

                <div key={casa._id} className="casa pessoal">
                  <i onClick={()=>deletarCasa(casa._id)} className="fa-solid fa-trash fa-lg"></i>
                  <img src={casa.foto} />
                  <div className="footer">
                    <h3><Link to={`/casa/${casa._id}`} >Ver mais</Link></h3>
                    <span>R$ {casa.preco}</span>
                  </div>
                </div>

              )
            })
          ) }
        </div>

        <button onClick={()=>redirecionar("nova-casa")} className="cadastrar">
          Cadastrar casa
        </button>

      </div>

      <div className="propostas">

        <h2><i className="fa-solid fa-comment"></i> Propostas recebidas!</h2>

        <div className="minhas-propostas">
          { minhasPropostas.length === 0 ? (
            <p>Nenhuma proposta recebida</p>
          ): (
            minhasPropostas.map((proposta, index)=>{
              return (
                <div key={proposta._id} className="proposta">
                  <h3>{proposta.interessado.email}</h3>
                  <i onClick={()=>abrirPreview(proposta._id)} className="fa-solid fa-eye fa-lg"></i>
                </div>
              )
            })
          ) }
        </div>
      </div>

      <button onClick={deslogarUsuario} className="sair">Sair</button>
    </div>
  );
}

export default Perfil;