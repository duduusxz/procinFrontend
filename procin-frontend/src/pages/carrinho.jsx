import React from "react";
import Nav from "../components/nav.jsx";
import styles from "../style/carrinho.module.css"
import NavInferior from "../components/navInferior.jsx";
import produto from "../assets/produto.png"

export default function Carrinho() {
  return (
    <>
    <Nav />
    <NavInferior />
    
    <main className={styles.carrinhoContainer}>
      <h2>Carrinho</h2>

      <table className={styles.carrinhoTabela}>
        <thead>
          <tr>
            <th className={styles.produtosTh}>Produtos</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Preço Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p className={styles.vendedor}>Nome do vendedor</p>
              <div className={styles.produto}>
                <div className={styles.imagemFrete}>
                  <img src={produto} alt="Produto" />
                  <span className={styles.frete}>Frete grátis</span>
                </div>
                <div className={styles.descricao}>
                  <p>Descrição do produto</p>
                </div>
              </div>
            </td>
            <td>R$ 10,00</td>
            <td>1</td>
            <td>R$ 10,00</td>
          </tr>

          <tr>
            <td>
              <p className={styles.vendedor}>Nome do vendedor</p>
              <div className={styles.produto}>
                <div className={styles.imagemFrete}>
                  <img src={produto} alt="Produto" />
                  <span className={styles.frete}>Frete grátis</span>
                </div>
                <div className={styles.descricao}>
                  <p>Descrição do produto</p>
                </div>
              </div>
            </td>
            <td>R$ 10,00</td>
            <td>1</td>
            <td>R$ 10,00</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.carrinhoFooter}>
        <div className={styles.acoes}>
          <span>Selecionar Tudo (2)</span>
          <a href="#">Excluir</a>
          <a href="#">
            Mover para 
          </a>
        </div>

        <div className={styles.total}>
          <span>Total (0 item):</span>
          <strong>R$ 17,00</strong>
          <button className={styles.btnContinuar}>Continuar</button>
        </div>
      </div>
    </main>
    </>
  );
}