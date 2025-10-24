import { useState } from "react";
import Nav from "../components/nav.jsx";
import NavInferior from "../components/navInferior.jsx";
import livros from "../assets/livros.png";
import limpeza from "../assets/limpeza.png";
import feminino from "../assets/feminino.png";
import masculino from "../assets/masculino.png";
import acessorios from "../assets/acessorios.png";
import eletronicos from "../assets/eletronicos.png";
import produto from "../assets/produto.jpg"; // importante, imagem do produto
import styles from "../style/home.module.css";
import CardProduto from "../components/cardProduto.jsx";

export default function Home() {
  const [favoritos, setFavoritos] = useState([false, false, false, false, false]);

  const toggleFavorito = (index) => {
    setFavoritos((prev) =>
      prev.map((fav, i) => (i === index ? !fav : fav))
    );
  };

  return (
    <div>
      <Nav />
      <NavInferior />

      <main>
        {/* ============================ */}
        {/* 🌟 Carrossel "Mais Procurados" */}
        {/* ============================ */}
        <div className={styles.maisProcurados}>
          <h2>Mais Procurados</h2>
          <div className={styles.carroselContainer}>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document
                  .querySelector(`.${styles.carrosel}`)
                  .scrollBy(-230, 0)
              }
            >
              ‹
            </button>
            <div className={styles.carrosel}>
              <div className={styles.carroselItem}>
                <img src={feminino} alt="Feminino" />
                <p>Feminino</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={masculino} alt="Masculino" />
                <p>Masculino</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={acessorios} alt="Acessórios" />
                <p>Acessórios</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={eletronicos} alt="Eletrônicos" />
                <p>Eletrônicos</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={limpeza} alt="Limpeza" />
                <p>Limpeza</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={livros} alt="Livros" />
                <p>Livros</p>
              </div>
            </div>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document
                  .querySelector(`.${styles.carrosel}`)
                  .scrollBy(230, 0)
              }
            >
              ›
            </button>
          </div>
        </div>

        {/* ============================ */}
        {/* 🛍️ Seção de Produtos */}
        {/* ============================ */}
        <div className={styles.produtosContainer}>
          <h2>Produtos</h2>
          <div className={styles.produtosLista}>
            {/* 👇 AQUI estão os seus produtos */}
            <CardProduto
              idx={0}
              nome="Camiseta Masculina"
              localizacao="São Paulo"
              preco={39.9}
              imagem={produto}
              toggleFavorito={toggleFavorito}
            />

            <CardProduto
              idx={1}
              nome="Camiseta Preta"
              localizacao="Rio de Janeiro"
              preco={89.9}
              imagem={produto}
              toggleFavorito={toggleFavorito}
            />

            <CardProduto
              idx={2}
              nome="Livro: React Moderno"
              localizacao="Curitiba"
              preco={59.9}
              imagem={livros}
              toggleFavorito={toggleFavorito}
            />

            <CardProduto
              idx={3}
              nome="Fone Bluetooth"
              localizacao="Minas Gerais"
              preco={199.9}
              imagem={eletronicos}
              toggleFavorito={toggleFavorito}
            />

            <CardProduto
              idx={4}
              nome="Kit de Limpeza"
              localizacao="Bahia"
              preco={24.9}
              imagem={limpeza}
              toggleFavorito={toggleFavorito}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
