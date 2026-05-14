import { Router } from "express"
import { upload } from "./upload.js"

import { logarUsuario, cadastrarUsuario, mostrarUsuarios } from "./controllers/usuarioController.js"
import { listarCasas, listarCasa, novaCasa, editarCasa, deletarCasa } from "./controllers/casaController.js"
import { casasCadastradas } from "./controllers/dashboardController.js"
import { fazerReserva, todasReservas, listarReservas, deletarReserva } from "./controllers/reservaController.js"

import { checarToken } from "./middlewares/usuarioMiddleware.js"

const router = Router()

// Rotas relacionadas aos usuários e controles de seção.
router.get("/usuarios", mostrarUsuarios)
router.post("/login", logarUsuario)
router.post("/cadastro", cadastrarUsuario)
// Rotas relacionadas às Casas
router.get("/casas", listarCasas)
router.get("/casa/:id", listarCasa)
router.post("/casas", checarToken, upload.single("foto"), novaCasa)
router.put("/casas/:casa_id", upload.single("foto"), editarCasa)
router.delete("/casas/:casa_id", deletarCasa)
// Rotas relacionadas ao Dashboard
router.get("/dashboard", checarToken, casasCadastradas)
// Rotas relacionadas às reservas
router.get("/todas-reservas", todasReservas)
router.get("/reservas", checarToken, listarReservas)
router.post("/casas/:casa_id/reserva", checarToken, fazerReserva)
router.delete("/reservas/:id_reserva", deletarReserva)

export default router