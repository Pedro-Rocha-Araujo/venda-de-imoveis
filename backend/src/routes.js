import { Router } from "express"
import { upload } from "./upload.js"
// Imports das funções de Usuário
import { 
  logarUsuario, 
  cadastrarUsuario, 
  mostrarUsuarios 
} from "./controllers/usuarioController.js"
// Imports das funções de casas
import { 
  listarCasas, 
  listarCasa, 
  novaCasa,  
  deletarCasa 
} from "./controllers/casaController.js"
// Import das funções de Dashboard
import { 
  casasCadastradas 
} from "./controllers/dashboardController.js"
// Import das funções de Reserva / Proposta
import { 
  fazerReserva, 
  getReserva, 
  todasReservas, 
  listarReservas, 
  deletarReserva 
} from "./controllers/reservaController.js"
// Import do Middleware de checagem do token de autenticação
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
router.delete("/casas/:casa_id", deletarCasa)
// Rotas relacionadas ao Dashboard
router.get("/dashboard", checarToken, casasCadastradas)
// Rotas relacionadas às reservas
router.get("/todas-reservas", todasReservas)
router.get("/reservas", checarToken, listarReservas)
router.get("/reserva/:id_reserva", getReserva)
router.post("/casas/:casa_id/reserva", checarToken, fazerReserva)
router.delete("/reservas/:id_reserva", deletarReserva)

export default router