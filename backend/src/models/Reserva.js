import { Schema, model } from "mongoose"

const SchemaReserva = new Schema({
  data: String,
  usuario: {
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