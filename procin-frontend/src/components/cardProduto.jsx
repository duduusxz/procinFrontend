import React from "react";
import gostar from "../assets/gostar.png";
import styles from "../style/Home.module.css";
import { useNavigate } from "react-router-dom";

export default function CardProduto({ idx, favorito, toggleFavorito }) {

  const navigate = useNavigate();
  
    function IrParaProdutos() {
      navigate("/produtos");
    }

  return (
    <div className={styles.bloco} onClick={IrParaProdutos}>
      <div className={styles.topo}>
        <div className={styles.estrelas}>
          <span>★ ★ ★ ★ ☆</span> 4.0
        </div>
        <img src="" alt="" />
      </div>
      <div className={styles.inferior}>
        <h2>Nome produto</h2>
        <p>Localização</p>
        <h2>R$:00,00</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button>Adicionar ao carrinho</button>
          <img
            src={gostar}
            alt="Favoritar"
            className={favorito ? styles.coracaoAtivo : ""}
            onClick={() => toggleFavorito(idx)}
            style={{ cursor: "pointer", width: "28px", height: "28px" }}
          />
        </div>
      </div>
    </div>
  );
}
