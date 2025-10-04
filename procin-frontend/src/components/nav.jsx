import logoBranca from "../assets/logoBranca.png";
import coracao from "../assets/coracao.png";
import carrinho from "../assets/export.png";
import perfil from "../assets/perfil.png";
import styles from "../style/home.module.css";
import { useNavigate } from "react-router-dom";
import PerfilLateral from "./sidebarPerfil";
import React, { useState } from "react";

export default function Nav() {
  const navigate = useNavigate();
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  function IrParaLogin() {
    navigate("/login");
  }

  function IrParaCarrinho() {
    navigate("/meuCarrinho");
  }

  function IrParaHome() {
    navigate("/");
  }

  function IrParaCadastro() {
    navigate("/cadastro");
  }

  return (
    <>
      <header className={styles.menuNav}>
        <nav>
          <div className={styles.logo}>
            <img src={logoBranca} alt="Logo" onClick={IrParaHome} />
          </div>

          <div className={styles.buscar}>
            <input type="text" placeholder="Buscar..." />
          </div>

          <div className={styles.icons}>
            <img src={coracao} alt="Ícone 1" />
            <img src={carrinho} alt="Ícone 2" onClick={IrParaCarrinho} />
            <img src={perfil} alt="Ícone 3" onClick={() => setMostrarPerfil(true)} />
          </div>

          <div>
            <p className={styles.entreCadastro}>
              Bem-vindo <br />
              <span onClick={IrParaLogin} className={styles.loginCadastro}>Entre</span> ou{" "}
              <span onClick={IrParaCadastro} className={styles.loginCadastro}>cadastre-se</span>
            </p>
          </div>
        </nav>
      </header>

      {mostrarPerfil && <PerfilLateral onClose={() => setMostrarPerfil(false)} />}
    </>
  );
}