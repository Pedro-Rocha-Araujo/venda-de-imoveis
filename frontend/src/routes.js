import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Casa from "./components/home/Casa"
import Cadastro from "./components/usuario/Cadastro"
import Login from "./components/usuario/Login"

function RouterApp() {
  return (
    <Routes>
      <Route path="/casas" element={ <Home /> } />
      <Route path="/casa/:id" element={ <Casa /> } />
      <Route path="/cadastro" element={ <Cadastro /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  )
}

export default RouterApp