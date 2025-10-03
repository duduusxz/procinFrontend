import { useState } from "react";
import Nav from "../components/nav.jsx";
import NavInferior from "../components/navInferior.jsx";
import livros from "../assets/livros.jpg";
import limpeza from "../assets/limpeza.jpg";
import feminino from "../assets/Mulheres.jpg";
import masculino from "../assets/Homens.jpg";
import acessorios from "../assets/Acessorios.jpg";
import eletronicos from "../assets/eletronicos.jpg";
import styles from "../style/home.module.css";
import CardProduto from "../components/cardProduto.jsx";

export default function Home() {
  const [favoritos, setFavoritos] = useState([false, false, false, false]);

  const toggleFavorito = (index) => {
    setFavoritos((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <div>
      <Nav />
      <NavInferior />

      <main>
        {/* Carrossel */}
        <div className={styles.maisProcurados}>
          <h2>Mais Procurados</h2>
          <div className={styles.carroselContainer}>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document.querySelector(`.${styles.carrosel}`).scrollBy(-230, 0)
              }
            >
              ‹
            </button>
            <div className={styles.carrosel}>
              <div className={styles.carroselItem}><img src={feminino} alt="Produto 1" /><p>Feminino</p></div>
              <div className={styles.carroselItem}><img src={masculino} alt="Produto 2" /><p>Masculino</p></div>
              <div className={styles.carroselItem}><img src={acessorios} alt="Produto 3" /><p>Acessórios</p></div>
              <div className={styles.carroselItem}><img src={eletronicos} alt="Produto 4" /><p>Eletronicos</p></div>
              <div className={styles.carroselItem}><img src={limpeza} alt="Produto 5" /><p>Limpeza</p></div>
              <div className={styles.carroselItem}><img src={livros} alt="Produto 6" /><p>Livros</p></div>
            </div>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document.querySelector(`.${styles.carrosel}`).scrollBy(230, 0)
              }
            >
              ›
            </button>
          </div>
        </div>

        <h2 className={styles.produto}>Produtos</h2>

        {/* Produtos */}
        <div className={styles.produtos}>
          <CardProduto />
          <CardProduto />
          <CardProduto />
        </div>
      </main>
    </div>
  );
}
