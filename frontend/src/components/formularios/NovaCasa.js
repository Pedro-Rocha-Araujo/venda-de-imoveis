import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import "./formularios.css"

function NovaCasa() {
  const [foto, setFoto] = useState()
  const [preco, setPreco] = useState()
  const [localizacao, setLocalizacao] = useState("")
  const [descricao, setDescricao] = useState("")
  const navigate = useNavigate()

  async function cadastrarCasa(e) {
    e.preventDefault()
    try {
      const formData = new FormData()
      const token = localStorage.getItem("token")
      formData.append("foto", foto)
      formData.append("preco", Number(preco))
      formData.append("localizacao", localizacao)
      formData.append("descricao", descricao)
      const response = await axios.post("http://localhost:4000/casas", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      })
      navigate("/casas")
    } catch {
      toast.error("Erro ao cadastrar Casa!")
    }
  }

  return (
    <div className="container nova-casa">
      <h2>Cadastrar Casa!</h2>
      <form onSubmit={cadastrarCasa} className="nova-casa">

        <div className="input-file">
          <input type="file" name="foto" onChange={(e)=>setFoto(e.target.files[0])} required />
          <p><i className="fa-solid fa-arrow-up-from-bracket"></i> Foto da casa</p>
        </div>

        <input type="number" required placeholder="Valor da mensalidade R$ 0000,00"
          name="preco" onChange={(e)=>setPreco(e.target.value)}
        />

        <input type="text" required placeholder="Endereço da casa" 
          name="edereco" onChange={(e)=>setLocalizacao(e.target.value)}
        />

        <textarea required placeholder="Descrição da casa" 
          name="descricao" onChange={(e)=>setDescricao(e.target.value)}
        />

        <button>Cadastrar</button>
      </form>
    </div>
  );
}

export default NovaCasa;