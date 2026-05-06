import ModelCasa from "../models/Casa.js"

export async function casasCadastradas(request, response) {
  try {
    const { id_usuario } = request.headers
    if(!id_usuario){
      return response.status(400).json({Erro: "Usuário não está devidamente logado!"})
    }
    const query = await ModelCasa.find({ usuario: id_usuario })
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar as casas cadastradas!"})
  }
}