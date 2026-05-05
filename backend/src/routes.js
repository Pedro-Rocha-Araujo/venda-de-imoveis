import { Router } from "express"
import { upload } from "./upload.js"

import { logarUsuario, cadastrarUsuario, mostrarUsuarios } from "./controllers/usuarioController.js"
import { listarCasas, novaCasa, editarCasa, deletarCasa } from "./controllers/casaController.js"

const router = Router()

// Rotas relacionadas aos usuários e controles de seção.
router.get("/usuarios", mostrarUsuarios)
router.post("/login", logarUsuario)
router.post("/cadastro", cadastrarUsuario)
// Rotas relacionadas às Casas
router.get("/casas", listarCasas)
router.post("/nova-casa", upload.single("foto"), novaCasa)
router.put("/editar-casa/:id", upload.single("foto"), editarCasa)
router.delete("/deletar-casa/:id", deletarCasa)

export default router