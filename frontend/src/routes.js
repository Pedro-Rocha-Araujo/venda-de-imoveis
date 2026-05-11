import { Routes, Route } from "react-router-dom"

import PrivateRoute from "./PrivateRoute"

import Home from "./components/home/Home"
import Casa from "./components/home/Casa"
import Cadastro from "./components/usuario/Cadastro"
import Login from "./components/usuario/Login"
import Perfil from "./components/perfil/Perfil"
import NovaCasa from "./components/formularios/NovaCasa"

function RouterApp() {
  return (
    <Routes>
      <Route path="/casas" element={ <PrivateRoute> <Home /> </PrivateRoute> } />
      <Route path="/casa/:id" element={ <PrivateRoute> <Casa /> </PrivateRoute> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/perfil" element={ <PrivateRoute> <Perfil /> </PrivateRoute> } />
      <Route path="/nova-casa" element={ <PrivateRoute> <NovaCasa /> </PrivateRoute> } />
    </Routes>
  )
}

export default RouterApp