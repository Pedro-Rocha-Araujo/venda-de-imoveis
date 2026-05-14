import ModelCasa from "../models/Casa.js"

export async function listarCasas(request, response) {
  try {
    const query = await ModelCasa.find({ status: true })
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar casas!"})
  }
}

export async function listarCasa(request, response) {
  try {
    const { id } = request.params
    if(!id || id === undefined) {
      return response.status(400).json({Erro: "Erro ao buscar casa pelo Id"})
    }
    const query = await ModelCasa.findById( id ).populate("usuario")
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar casa!"})
  }
}

export async function novaCasa(request, response) {
  try {
    const id_usuario = request.usuario.id
    if(!id_usuario) {
      return response.status(400).json({Erro: "Usuário não está devidamente logado!"})
    }
    const foto = request.file.filename
    if(!foto){
      return response.status(400).json({Erro: "Imagem não encontrada!"})
    }
    const { descricao, preco, localizacao } = request.body
    const novaCasa = await ModelCasa.create({
      usuario: id_usuario,
      foto: `http://localhost:4000/uploads/${foto}`,
      descricao: descricao,
      preco: Number(preco),
      localizacao: localizacao,
      status: true,
    })
    return response.status(201).json({Mensagem: "Casa cadastrada com sucesso!"})
  } catch(erro) {
    return response.status(500).json({Erro: "Erro ao cadastrar casa!"})
    console.log(erro)
  }
}

export async function editarCasa(request, response) {
  try {
    const { casa_id } = request.params
    if(!casa_id) {
      return response.status(400).json({Erro: "Os dados não foram passados corretamente!"})
    }

    const { id_usuario } = request.headers
    if(!id_usuario) {
      return response.status(400).json({Erro: "Usuário não está devidamente logado!"})
    }

    const foto = request.file.filename
    if(!foto){
      return response.status(400).json({Erro: "Imagem não encontrada!"})
    }

    const { descricao, preco, localizacao, status } = request.body
    const query = await ModelCasa.findByIdAndUpdate({_id: casa_id}, {
      usuario: id_usuario,
      foto: `http://localhost:4000/uploads/${foto}`,
      descricao: descricao,
      preco: Number(preco),
      localizacao: localizacao,
      status: status,
    })
    return response.status(200).json({Mensagem: "Casa editada com sucesso!"})
  } catch {
    return response.status(500).json({Erro: "Erro ao editar casa!"})
  }
}

export async function deletarCasa(request, response) {
  try {
    const { casa_id } = request.params
    const id_usuario = request.usuario.id

    if(!casa_id) {
      return response.status(400).json({Erro: "Os dados não foram passados corretamente!"})
    }

    const consulta = await ModelCasa.findById(casa_id)
    
    if(!consulta) {
      return response.status(404).json({Erro: "Casa não encontrada!"})
    }
    
    if(consulta.usuario.toString() !== id_usuario) {
      return response.status(401).json({Erro: "Você está tentando deletar uma casa que não é sua!"})
    }


    const query = await ModelCasa.findByIdAndDelete(casa_id)

    return response.status(200).json({Mensagem: "Casa apagada com sucesso!"})

  } catch {
    return response.status(500).json({Erro: "Erro ao deletar casa!"})
  }
}