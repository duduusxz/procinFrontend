import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Carrinho from "./pages/carrinho.jsx";
import PagamentoPendente from "./components/pagamentoPendente.jsx";
import Login from "./pages/login.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
