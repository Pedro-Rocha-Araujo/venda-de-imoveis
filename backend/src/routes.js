import { Router } from "express"

import { logarUsuario, cadastrarUsuario } from "./controllers/usuarioController.js"

const router = Router()

// Rotas relacionadas aos usuários e controles de seção.
router.post("/login", logarUsuario)
router.post("/cadastro", cadastrarUsuario)

export default router