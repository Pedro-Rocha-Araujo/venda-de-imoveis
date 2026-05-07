import { BrowserRouter } from "react-router-dom";
import Header from "./components/elements/Header"
import RouterApp from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;