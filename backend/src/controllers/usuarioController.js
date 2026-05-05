import ModelUsuario from "../models/Usuario.js"

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
      return response.status(400).json({Erro: "Usuário não possui um login!"})
    }
    return response.status(200).json({Mensagem: "Usuário logado com sucesso!"})
  } catch {
    return response.status(500).json({Erro: "Erro ao cadastrar usuario!"})
  }
}

export async function cadastrarUsuario(request, response) {
  try {
    const { email } = request.body
    const consulta = await ModelUsuario.findOne({ email: email })
    if(consulta) {
      return response.status(400).json({Erro: "O usuário em questão já possui um login!"})
    }
    const query = await ModelUsuario.insertOne({ email: email })
    return response.status(201).json({Mensagem: "Usuario cadastrado com sucesso!"})
  } catch {
    return response.status(500).json({Erro: "Erro ao cadastrar usuário!"})
  }
}