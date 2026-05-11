import { Router } from "express"
import { upload } from "./upload.js"

import { logarUsuario, cadastrarUsuario, mostrarUsuarios } from "./controllers/usuarioController.js"
import { listarCasas, novaCasa, editarCasa, deletarCasa } from "./controllers/casaController.js"
import { casasCadastradas } from "./controllers/dashboardController.js"
import { fazerReserva, listarReservas, deletarReserva } from "./controllers/reservaController.js"

import { checarToken } from "./middlewares/usuarioMiddleware.js"

const router = Router()

// Rotas relacionadas aos usuários e controles de seção.
router.get("/usuarios", mostrarUsuarios)
router.post("/login", logarUsuario)
router.post("/cadastro", cadastrarUsuario)
// Rotas relacionadas às Casas
router.get("/casas", listarCasas)
router.post("/casas", upload.single("foto"), novaCasa)
router.put("/casas/:casa_id", upload.single("foto"), editarCasa)
router.delete("/casas/:casa_id", deletarCasa)
// Rotas relacionadas ao Dashboard
router.get("/dashboard", casasCadastradas)
// Rotas relacionadas às reservas
router.get("/reservas", listarReservas)
router.post("/casas/:casa_id/reserva", fazerReserva)
router.delete("/reservas/cancelar", deletarReserva)

export default router