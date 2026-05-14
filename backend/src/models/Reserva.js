import { Schema, model } from "mongoose"

const SchemaReserva = new Schema({
  data: {type: Date, required: true, default: Date.now},
  telefone: {type: String, required: true},
  mensagem: {type: String, required: true},
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios"
  },
  interessado: {
    type: Schema.Types.ObjectId,
    ref: "usuarios"
  },
  casa: {
    type: Schema.Types.ObjectId,
    ref: "casas"
  }
})

const ModelReserva = model("reservas", SchemaReserva)

export default ModelReserva