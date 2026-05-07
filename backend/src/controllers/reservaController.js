import ModelReserva from "../models/Reserva.js"
import ModelCasa from "../models/Casa.js"
import ModelUsuario from "../models/Usuario.js"

export async function listarReservas(request, response) {
  try {
    const id_usuario = request.headers
    const query = await ModelReserva.find({usuario: id_usuario}).populate("casas")
    return response.status(200).json(query)
  } catch {
    return response.status(500).json({Erro: "Erro ao listar as reservas!"})
  }
}

export async function fazerReserva(request, response) {
  try {
    const { id_usuario } = request.headers
    const { casa_id } = request.params
    const { data } = request.body

    const buscarCasa = await ModelCasa.findById(casa_id)
    if(!buscarCasa) {
      return response.status(400).json({Erro: "Erro ao buscar o id da casa solicitada!"})
    }
    if(buscarCasa.status === false){
      return response.status(400).json({Erro: "A casa em questão não pode ser reservada!"})
    }
    const buscarUsuario = await ModelUsuario.findById(id_usuario)
    if(!buscarUsuario) {
      return response.status(400).json({Erro: "Erro ao buscar o Usuario!"})
    }
    if(buscarUsuario._id === buscarCasa.usuario) {
      return response.status(400).json({Erro: "Você não pode reservar a sua própria casa!"})
    }

    const reserva = await ModelReserva.create({
      data: data,
      usuario: id_usuario,
      casa: casa_id
    })
    return response.status(201).json({Mensagem: "Reserva feita com sucesso!"})

  } catch {
    return response.status(500).json({Erro: "Erro ao fazer a reserva!"})
  }
}

export async function deletarReserva(request, response) {
  try {
    const { id_reserva } = request.body
    await ModelReserva.findByIdAndDelete({ _id: id_reserva })
    return response.status(200).json({Mensagem: "Reserva cancelada!"})
  } catch {
    return response.status(500).json({Erro: "Erro ao deletar a reserva!"})
  }
}