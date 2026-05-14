import ModelReserva from "../models/Reserva.js"
import ModelCasa from "../models/Casa.js"
import ModelUsuario from "../models/Usuario.js"

export async function todasReservas(request, response) {
  try {
    const query = await ModelReserva.find().populate("casa").populate("usuario")
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao buscar as reservas!"})
  }
}

export async function listarReservas(request, response) {
  try {
    const id_usuario = request.usuario.id
    const query = await ModelReserva.find({usuario: id_usuario}).populate("casa").populate("usuario")
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao listar as reservas!"})
  }
}

export async function fazerReserva(request, response) {
  try {
    const id_usuario = request.usuario.id
    const { casa_id } = request.params
    const { telefone, mensagem } = request.body

    const buscarCasa = await ModelCasa.findById(casa_id)
    if(!buscarCasa) {
      return response.status(400).json({Erro: "Erro ao buscar o id da casa solicitada!"})
    }
    if(buscarCasa.status === false){
      return response.status(400).json({Erro: "A casa em questão não pode ser reservada!"})
    }

    if(id_usuario.toString() === buscarCasa.usuario.toString()) {
      return response.status(400).json({Erro: "Você não pode reservar a sua própria casa!"})
    }

    const reserva = await ModelReserva.create({
      telefone: telefone,
      mensagem: mensagem,
      usuario: id_usuario,
      casa: casa_id
    })
    return response.status(201).json({Mensagem: "Reserva feita com sucesso!"})

  } catch {
    return response.status(500).json({Erro: "Erro ao fazer a reserva! | Erro->"})
  }
}