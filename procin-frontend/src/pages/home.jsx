import livros from "../assets/livros.jpg"
import limpeza from "../assets/limpeza.jpg"
import feminino from "../assets/feminino.png"
import masculino from "../assets/masculino.png"
import acessorios from "../assets/acessorios.png"
import eletronicos from "../assets/eletronicos.jpg"
import logoBranca from "../assets/logoBranca.png";
import coracao from "../assets/coracao.png";
import carrinho from "../assets/export.png";
import perfil from "../assets/perfil.png";

import styles from "../style/Home.module.css";

export default function Home() {
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
                <p>Produto 1</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={masculino} alt="Produto 2" />
                <p>Produto 2</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={acessorios} alt="Produto 3" />
                <p>Produto 3</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={eletronicos} alt="Produto 4" />
                <p>Produto 4</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={limpeza} alt="Produto 5" />
                <p>Produto 5</p>
              </div>
              <div className={styles.carroselItem}>
                <img src={livros} alt="Produto 6" />
                <p>Produto 6</p>
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
          <div className={styles.bloco}>
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
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
          <div className={styles.bloco}>
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
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
          <div className={styles.bloco}>
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
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
          <div className={styles.bloco}>
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
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
