import styles from "../style/pdd_usuario.module.css";
import Nav from "../components/nav";
import React, { useState } from "react";
import NavInferior from "../components/navInferior";

// Função para pegar as informações do produto
function getProduto() {
  return {
    nome: "Produto 1",
    variacao: "Variação A",
    quantidade: 2,
    status: "Entregue",
    total: 100.0,
    imagem: "caminho/para/imagem.jpg", // Adicionando uma imagem ao produto
  };
}

export default function PddUsuario() {
  const [produto, setProduto] = useState(getProduto());

  // Função para avaliação do produto
  const handleAvaliacao = () => {
    console.log("Avaliar produto");
    // Exemplo de como você poderia atualizar o estado de produto
    setProduto((prevProduto) => ({
      ...prevProduto,
      status: "Avaliado",
    }));
  };

  // Função para comprar novamente
  const handleComprarNovamente = () => {
    console.log("Comprar novamente");
    // Exemplo de como você poderia reiniciar o produto para seu estado inicial
    setProduto(getProduto());
  };

  return (
    <div>
      <Nav />
      <NavInferior />
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.esquerda}>
            {/* Exibindo a imagem do produto */}
            <img src={produto.imagem} alt={produto.nome} className={styles.imagemProduto} />
            <div className={styles.info}>
              <p>{produto.nome}</p>
              <p>Variação: {produto.variacao}</p>
              <p>Quantidade: {produto.quantidade}</p>
              <p>Status: {produto.status}</p>
              <h1>Total da compra: R$ {produto.total.toFixed(2)}</h1>
            </div>
          </div>
          <div className={styles.direita}>
            <p>{produto.status === "Avaliado" ? "Avaliação feita" : "Não avaliado"}</p>
            {/* Botões com as funções de click */}
            <button className={styles.avaliar} onClick={handleAvaliacao}>Avaliar</button>
            <button className={styles.comprar} onClick={handleComprarNovamente}>Comprar Novamente</button>
          </div>
        </div>
      </main>
    </div>
  );
}
