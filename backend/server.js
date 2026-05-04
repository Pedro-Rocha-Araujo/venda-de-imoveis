import express from "express"
import cors from "cors"
import { connect } from "mongoose"
import router from "./src/routes.js"
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

async function conectarBanco() {
  try {
    await connect(process.env.ROTA_BANCO+"imobiliaria")
    console.log("Banco conectado com sucesso!")
  } catch {
    console.log("Erro ao conectar no banco de dados!")
  }
}
conectarBanco()

app.listen(4000, ()=> console.log("Servidor rodando!"))