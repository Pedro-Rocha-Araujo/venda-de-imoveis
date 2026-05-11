import jwt from "jsonwebtoken"
import "dotenv/config"

export async function checarToken(request, response, next) {
  try {
    const authHeader = request.headers.authorization
    if(!authHeader) {
      return response.status(401).json({erro: "Token não enviado!"})
    }

    const token = authHeader.split(" ")[1]

    const decodificar = jwt.verify(
      token,
      process.env.SENHA_JWT
    )

    request.usuario = decodificar

    next()

  } catch {
    return response.status(401).json({Erro: "Erro ao verificar o token!"})
  }
}