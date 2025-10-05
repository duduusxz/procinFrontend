import NavInferior from "../components/navInferior.jsx";
import Nav from "../components/nav.jsx";
import CardProdutoVendedor from "../components/cardProdutoVendedor.jsx";
import styles from "../style/cardProdutoVendedor.module.css";
import { useState } from "react";

export default function ProdutosVendedor() {
  const [categoria, setCategoria] = useState("todos");

  const handleCategoria = (novaCategoria) => {
    setCategoria(novaCategoria);
  };

  return (
    <>
      <Nav />
      <NavInferior />

      <div className={styles.barraStatus}>
        <div className={styles.linksCategoria}>
          <a
            href="#"
            onClick={() => handleCategoria("todos")}
            className={categoria === "todos" ? styles.active : ""}
          >
            Todos
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("nao-pago")}
            className={categoria === "nao-pago" ? styles.active : ""}
          >
            Não Pago
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("a-enviar")}
            className={categoria === "a-enviar" ? styles.active : ""}
          >
            A Enviar
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("enviado")}
            className={categoria === "enviado" ? styles.active : ""}
          >
            Enviado
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("concluido")}
            className={categoria === "concluido" ? styles.active : ""}
          >
            Concluído
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("cancelado")}
            className={categoria === "cancelado" ? styles.active : ""}
          >
            Cancelado
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("devolucao")}
            className={categoria === "devolucao" ? styles.active : ""}
          >
            Devolução/Reembolso
          </a>
          <a
            href="#"
            onClick={() => handleCategoria("falha-entrega")}
            className={categoria === "falha-entrega" ? styles.active : ""}
          >
            Falha na Entrega
          </a>
        </div>

        <button className={styles.btnAddProduto}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
          </svg>
          Adicionar Produto
        </button>
      </div>

      <CardProdutoVendedor categoria={categoria} />
    </>
  );
}
