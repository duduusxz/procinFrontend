import { useState, useEffect } from "react";
import styles from "../style/sidebarPerfil.module.css";
import logo from "../assets/logo_preta.png";
import usuario from "../assets/usuario.webp";

function PerfilLateral({ onClose }) {
  const [fechando, setFechando] = useState(false);

  function handleClose() {
    setFechando(true); // ativa animação de saída
  }

  // depois que a animação terminar, desmonta o componente
  useEffect(() => {
    if (fechando) {
      const timer = setTimeout(() => {
        onClose();
      }, 300); // tempo da animação em ms (mesmo do CSS)
      return () => clearTimeout(timer);
    }
  }, [fechando, onClose]);

  return (
        <div className={styles.overlay} onClick={handleClose}>
      <div
        className={`${styles.perfilLateral} ${
          fechando ? styles.slideOut : styles.slideIn
        }`}
        onClick={(e) => e.stopPropagation()} // impede fechar clicando dentro
      >

        <div className={styles.logo}>
          <img src={logo} alt="Logo" id="logo" />
          <button className={styles.closeBtn} onClick={handleClose}>
          X
        </button>
        </div>

        <div className={styles.conteudo}>
          <img src={usuario} alt="Foto de perfil" className={styles.imagemUsuario}/>
          <p className={styles.nomeUsuario}>Nome do Usuário</p>
          <p className={styles.descricaoUsuario}>
            Descrição sobre usuário. Lorem ipsum dolor sit amet consectetur.
          </p>
          <button>Editar perfil</button>
          <button>Mensagens</button>
          <button>Meus serviços</button>
          <hr />
          <p className={styles.notaPerfil}>Nota do perfil: 4,9</p>
        </div>
      </div>
    </div>
  );
}

export default PerfilLateral;
