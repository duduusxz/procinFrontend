import styles from "../style/pdd_usuario.module.css";
import Nav from "../components/nav";
import React from "react";
import NavInferior from "../components/navInferior";

function getProduto() {
  return {
    nome: "Produto 1",
    variacao: "Variação A",
    quantidade: 2,
    status: "Entregue",
    total: 100.0,
  };
}

export default function PddUsuario() {
  const [produto, setProduto] = React.useState(getProduto());

  return (
    <div>
      <Nav />
      <NavInferior />
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.esquerda}>
            <img src="" alt="" />
            <div className={styles.info}>
              <p>{produto.nome}</p>
              <p>Variação: {produto.variacao}</p>
              <p>Quantidade: {produto.quantidade}</p>
              <p>Status: {produto.status}</p>
              <h1>Total da compra: R$ {produto.total.toFixed(2)}</h1>
            </div>
          </div>
          <div className={styles.direita}>
            <p>Não avaliado</p>
            <button className={styles.avaliar}>Avaliar</button>
            <button className={styles.comprar}>Comprar Novamente</button>
          </div>
        </div>
      </main>
    </div>
  );
}
