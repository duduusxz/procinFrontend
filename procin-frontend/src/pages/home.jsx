import { useState } from "react";
import livros from "../assets/livros.jpg";
import limpeza from "../assets/limpeza.jpg";
import feminino from "../assets/Mulheres.jpg";
import masculino from "../assets/Homens.jpg";
import acessorios from "../assets/Acessorios.jpg";
import eletronicos from "../assets/eletronicos.jpg";
import logoBranca from "../assets/logoBranca.png";
import coracao from "../assets/coracao.png";
import carrinho from "../assets/export.png";
import perfil from "../assets/perfil.png";
import gostar from "../assets/gostar.png";

import styles from "../style/Home.module.css";

export default function Home() {
  const [favoritos, setFavoritos] = useState([false, false, false, false]);

  const Favorito = (index) => {
    setFavoritos((prev) => prev.map((fav, i) => (i === index ? !fav : fav)));
  };

  return (
    <div>
      <header className={styles.menuNav}>
        <nav>
          <div className={styles.logo}>
            <img src={logoBranca} alt="Logo" />
          </div>
          <div className={styles.buscar}>
            <input type="text" placeholder="Buscar..." />
          </div>
          <div className={styles.icons}>
            <img src={coracao} alt="Ícone 1" />
            <img src={carrinho} alt="Ícone 2" />
            <img src={perfil} alt="Ícone 3" />
          </div>
          <div>
            <p>
              Bem vindo <br />
              Entre ou cadastre-se
            </p>
          </div>
        </nav>
      </header>
      <nav className={styles.navInferior}>
        <div>
          <p>Tem no soma</p>
          <p>Serviços</p>
          <p>Produtos</p>
          <p>Meus pedidos</p>
        </div>
      </nav>
      {/* Fim do NavBar */}

      <main>
        <div className={styles.maisProcurados}>
          <h2>Mais Procurados</h2>
          <div className={styles.carroselContainer}>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document.querySelector(`.${styles.carrosel}`).scrollBy(-150, 0)
              }
            >
              ‹
            </button>
            <div className={styles.carrosel}>
              <div className={styles.carroselItem}>
                <img src={feminino} alt="Produto 1" />
                <p>Feminino</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={masculino} alt="Produto 2" />
                <p>Masculino</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={acessorios} alt="Produto 3" />
                <p>Acessórios</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={eletronicos} alt="Produto 4" />
                <p>Eletronicos</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={limpeza} alt="Produto 5" />
                <p>Limpeza</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={livros} alt="Produto 6" />
                <p>Livros</p>
              </div>
            </div>
            <button
              className={styles.carroselBtn}
              onClick={() =>
                document.querySelector(`.${styles.carrosel}`).scrollBy(150, 0)
              }
            >
              ›
            </button>
          </div>
        </div>

        {/* Fim do Carrosel */}

        <div className={styles.produtos}>
          {[0, 1, 2, 3].map((idx) => (
            <div className={styles.bloco} key={idx}>
              <div className={styles.topo}>
                <div className={styles.estrelas}>
                  <span>★ ★ ★ ★ ☆</span>
                  4.0
                </div>
                <img src="" alt="" />
              </div>
              <div className={styles.inferior}>
                <h2>Nome produtos</h2>
                <p>Localização</p>
                <h2>R$:00,00</h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <button>Adicionar ao carrinho</button>
                  <img
                    src={gostar}
                    alt="Favoritar"
                    className={favoritos[idx] ? styles.coracaoAtivo : ""}
                    onClick={() => Favorito(idx)}
                    style={{ cursor: "pointer",
                       width: "28px",
                        height: "28px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
