import NavInferior from "../components/navInferior.jsx";
import Nav from "../components/nav.jsx";
import CardProdutoUsuario from "../components/cardProdutoUsuario.jsx";
import styles from "../style/cardProdutoVendedor.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PddUsuario() {
  const [categoria, setCategoria] = useState("todos");

  const handleCategoria = (novaCategoria) => {
    setCategoria(novaCategoria);
  };

    const navigate = useNavigate()

    function IrParaAdicionarProduto(){
      navigate("/adicionarProduto")
    }

  return (
    <>
      <Nav />
      <NavInferior />
      <div className={styles.wrapperr}>
      <CardProdutoUsuario categoria={categoria} />
      </div>
    </>
  );
}
