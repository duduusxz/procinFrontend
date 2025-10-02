import React from "react";
import logoBranca from "../assets/logoBranca.png";
import coracao from "../assets/coracao.png";
import carrinho from "../assets/export.png";
import perfil from "../assets/perfil.png";
import styles from "../style/home.module.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {

  const navigate = useNavigate()

  function IrParaLogin(){
    navigate("/login")
  }


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
                <p className={styles.entreCadastro}>
                  Bem vindo <br />
                  <p onClick={IrParaLogin} className={`${styles.entreCadastro} ${styles.loginCadastro}`}>Entre ou cadastre-se</p>
                </p>
              </div>
            </nav>
          </header>
  )
}