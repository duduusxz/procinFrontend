import React from "react";
import Nav from "../components/nav.jsx";
import NavInferior from "../components/navInferior.jsx";
import BoxPadrao from "../components/boxPadrao.jsx";
import styles from "../style/pdtFavorito.module.css";

export default function PdtFavorito() {
  return (
    <div>
      <Nav />
      <NavInferior />
      {/* Fim do NavBar */}
      <main className={styles.wrapper}>
        <div className={styles.baixo}>
        <BoxPadrao />
        <BoxPadrao />
        </div>
        <div className={styles.baixo}>
        <BoxPadrao />
        <BoxPadrao />
        </div>
        <div className={styles.baixo}>
        <BoxPadrao />
        <BoxPadrao />
        </div>
      </main>
    </div>
  );
}