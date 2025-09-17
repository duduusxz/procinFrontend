import React from "react";
import logoBranca from "../assets/logoBranca.png";
import coracao from "../assets/coracao.png";
import carrinho from "../assets/export.png";
import perfil from "../assets/perfil.png";
import styles from "../style/home.module.css";

export default function Nav() {
  return (
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
  );}