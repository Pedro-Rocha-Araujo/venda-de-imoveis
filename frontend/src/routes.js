import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Casa from "./components/home/Casa"

function RouterApp() {
  return (
    <Routes>
      <Route path="/casas" element={ <Home /> } />
      <Route path="/casa/:id" element={ <Casa /> } />
    </Routes>
  )
}

export default RouterApp