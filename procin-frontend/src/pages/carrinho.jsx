import React, { useEffect, useState } from "react";
import Nav from "../components/nav.jsx";
import styles from "../style/carrinho.module.css";
import NavInferior from "../components/navInferior.jsx";

export default function Carrinho() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setItens(carrinhoSalvo);
  }, []);

  // Função para remover um item
  function removerItem(index) {
    const novoCarrinho = itens.filter((_, i) => i !== index);
    setItens(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
  }

  // Calcula o total
  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <>
      <Nav />
      <NavInferior />

      <div className={styles.wrapper}>
        <main className={styles.carrinhoContainer}>
          <h2>Carrinho</h2>

          {itens.length === 0 ? (
            <p>Seu carrinho está vazio 😢</p>
          ) : (
            <table className={styles.carrinhoTabela}>
              <thead>
                <tr>
                  <th className={styles.produtosTh}>Produtos</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Preço Total</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {itens.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <p className={styles.vendedor}>{item.vendedor}</p>
                      <div className={styles.produto}>
                        <div className={styles.imagemFrete}>
                          <img src={item.imagem} alt={item.nome} />
                          <span className={styles.frete}>
                            Frete {item.frete}
                          </span>
                        </div>
                        <div className={styles.descricao}>
                          <p>{item.descricao}</p>
                        </div>
                      </div>
                    </td>
                    <td>R$ {item.preco.toFixed(2)}</td>
                    <td>{item.quantidade}</td>
                    <td>R$ {(item.preco * item.quantidade).toFixed(2)}</td>
                    <td className={styles.acoesCell}>
                      <button
                        className={styles.removerBtn}
                        onClick={() => removerItem(index)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {itens.length > 0 && (
            <div className={styles.carrinhoFooter}>
              <div className={styles.total}>
                <span>Total ({itens.length} itens):</span>
                <strong>R$ {total.toFixed(2)}</strong>
                <button className={styles.btnContinuar}>Continuar</button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
