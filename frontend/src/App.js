import { BrowserRouter } from "react-router-dom";
import Header from "./components/elements/Header"
import RouterApp from "./routes"
import { ToastContainer } from "react-toastify"

function App() {
  const token = localStorage.getItem("token")

  return (
    <BrowserRouter>
      <ToastContainer autoClose="1000" />
      <Header />
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;