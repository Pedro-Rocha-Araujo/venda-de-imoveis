import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Casa from "./components/home/Casa"
import Cadastro from "./components/usuario/Cadastro"
import Login from "./components/usuario/Login"
import Perfil from "./components/perfil/Perfil"
import NovaCasa from "./components/formularios/NovaCasa"

function RouterApp() {
  return (
    <Routes>
      <Route path="/casas" element={ <Home /> } />
      <Route path="/casa/:id" element={ <Casa /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/perfil" element={ <Perfil /> } />
      <Route path="/nova-casa" element={ <NovaCasa /> } />
    </Routes>
  )
}

export default RouterApp