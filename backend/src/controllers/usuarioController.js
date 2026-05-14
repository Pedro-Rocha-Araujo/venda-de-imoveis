import ModelUsuario from "../models/Usuario.js"
import jwt from "jsonwebtoken"
import "dotenv/config"

export async function mostrarUsuarios(request, response) {
  try {
    const query = await ModelUsuario.find()
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar usuários!"})
  }
}

export async function logarUsuario(request, response) {
  try {
    const { email } = request.body
    const consulta = await ModelUsuario.findOne({email: email})
    if(!consulta) {
      return response.status(401).json({Erro: "Usuário não possui um cadastro!"})
    }
    const token = jwt.sign(
      { id: consulta._id, email: consulta.email },
      process.env.SENHA_JWT,
      { expiresIn: "1h" }
    )
    return response.status(200).json({
      Mensagem: "Usuário logado com sucesso!",
      token,
      usuario: consulta
    })
  } catch {
    return response.status(401).json({Erro: "Erro ao cadastrar usuario!"})
  }
}

export async function cadastrarUsuario(request, response) {
  try {
    const { email } = request.body
    const consulta = await ModelUsuario.findOne({ email: email })
    if(consulta) {
      return response.status(409).json({Erro: "O usuário já possui uma conta!"})
    }
    const query = await ModelUsuario.create({ email: email })
    const token = jwt.sign(
      {id: query._id, email: query.email}, 
      process.env.SENHA_JWT, 
      {expiresIn:"1h"}
    )
    return response.status(201).json({
      Mensagem: "Usuario cadastrado com sucesso!",
      token,
      query
    })
  } catch {
    return response.status(500).json({Erro: "Erro ao cadastrar usuário!"})
  }
}