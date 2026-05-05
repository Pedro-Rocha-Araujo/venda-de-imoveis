import { Schema, model } from "mongoose"

const SchemaCasa = new Schema({
  foto: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  localizacao: { type: String, required: true },
  status: { type: Boolean, required: true, default: true },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "usuarios"
  }
})

const ModelCasa = model("casas", SchemaCasa)

export default ModelCasa