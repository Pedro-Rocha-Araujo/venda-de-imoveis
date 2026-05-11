import { BrowserRouter } from "react-router-dom";
import Header from "./components/elements/Header"
import RouterApp from "./routes"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose="1000" />
      <Header />
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;