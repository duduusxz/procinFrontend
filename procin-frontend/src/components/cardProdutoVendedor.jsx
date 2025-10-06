import styles from "../style/cardProdutoVendedor.module.css";
import { useNavigate } from "react-router-dom";

export default function CardProdutoVendedor({ categoria }) {
  const produtos = [
    {
      id: 1,
      nome: "Produto 1",
      variacao: "Amarela x5",
      status: "enviado",
      preco: "R$ 120,00",
      imagem: "https://m.media-amazon.com/images/I/61H+dYcPgRL._AC_SX569_.jpg",
    },
    {
      id: 2,
      nome: "Produto 2",
      variacao: "Azul x2",
      status: "nao-pago",
      preco: "R$ 85,00",
      imagem: "https://m.media-amazon.com/images/I/61H+dYcPgRL._AC_SX569_.jpg",
    },
    {
      id: 3,
      nome: "Produto 3",
      variacao: "Vermelha x3",
      status: "concluido",
      preco: "R$ 150,00",
      imagem: "https://m.media-amazon.com/images/I/61H+dYcPgRL._AC_SX569_.jpg",
    },
  ];

  const produtosFiltrados =
    categoria === "todos"
      ? produtos
      : produtos.filter((p) => p.status === categoria);

    const navigate = useNavigate();
  
    function IrParaEditarProduto() {
      navigate("/editarProduto");
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.productContainer}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((p) => (
            <div
              key={p.id}
              className={styles.productCard}
              data-category={p.status}
            >
              <div className={styles.productImage}>
                <img src={p.imagem} alt={p.nome} />
              </div>

              <div className={styles.productInfo}>
                <p className={styles.productTitle}>
                  <strong>{p.nome}</strong>
                </p>
                <p className={styles.productVariation}>
                  Variação: {p.variacao}
                </p>
                <p className={styles.productStatus}>
                  <strong>Status:</strong> {p.status}
                </p>
              </div>

              <div className={styles.productActions}>
                <p className={styles.avaliacao}>Não Avaliado</p>
                <p className={styles.productPrice}>
                  <strong>Total da compra:</strong> {p.preco}
                </p>

                <div className={styles.actionButtons}>
                  <button className={styles.btnPrimary}>Emitir NF</button>

                  <button className={styles.btnIcon} onClick={IrParaEditarProduto}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 
                        7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 
                        1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.semProdutos}>Nenhum produto nesta categoria.</p>
        )}
      </div>
    </div>
  );
}
