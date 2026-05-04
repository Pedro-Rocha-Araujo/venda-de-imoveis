import { Schema, model } from "mongoose"

const SchemaUsuario = new Schema({
  email: { type: String, required: true }
})

const ModelUsuario = model("usuarios", SchemaUsuario)

export default ModelUsuario