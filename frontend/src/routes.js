import { Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"

function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
    </Routes>
  )
}

export default RouterApp