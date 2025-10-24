import { Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Carrinho from "./pages/carrinho.jsx";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/cadastro.jsx";
import TipoDeficiencia from "./pages/tipoDeficiencia.jsx";
import ProdutosVendedor from "./pages/produtosVendedor.jsx";
import EditarProduto from "./pages/editarProduto.jsx";
import AdicionarProduto from "./pages/adicionarProduto.jsx";
import PdtFavorito from "./pages/pdtFavorito.jsx";
import PdtPergunta from "./pages/pdtPergunta.jsx";
import Pergunta from "./pages/produto.jsx"; 
import PddUsuario from "./pages/produtosUsuario.jsx";
import Pagamento from "./pages/pagamento.jsx";
import PerfilVendedor from "./pages/perilVendedor.jsx";
import StatusPedido from "./pages/statusPedidio.jsx";
import Ods from "./pages/ods.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meuCarrinho" element={<Carrinho />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/tipoDeficiencia" element={<TipoDeficiencia />}/>
        <Route path="/meusProdutosVendedor" element={<ProdutosVendedor />}/>
        <Route path="/editarProduto" element={<EditarProduto />}/>
        <Route path="/adicionarProduto" element={<AdicionarProduto />}/>
        <Route path="/produtosFavoritados" element={<PdtFavorito />}/>
        <Route path="/produtosPergunta" element={<PdtPergunta />}/>
        <Route path="/produtos" element={<Pergunta />}/>
        <Route path="/meusProdutosUsuario" element={<PddUsuario />}/>
        <Route path="/finalizarPagamento" element={<Pagamento />}/>
        <Route path="/perfilVendedor" element={<PerfilVendedor />}/>
        <Route path="/statusPedido" element={<StatusPedido />}/>
        <Route path="/ods" element={<Ods />}/>
      </Routes>
    </div>
  );
}

export default App;
