import { Routes, Route, useNavigation } from "react-router-dom";
import Home from "./pages/home.jsx";
import Carrinho from "./pages/carrinho.jsx";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/cadastro.jsx";
import TipoDeficiencia from "./pages/tipoDeficiencia.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meuCarrinho" element={<Carrinho />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/tipoDeficiencia" element={<TipoDeficiencia />}/>
      </Routes>
    </div>
  );
}

export default App;
