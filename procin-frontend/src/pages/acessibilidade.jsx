import React, { useState } from 'react';
import styles from '../style/acessibilidade.module.css';
import Nav from '../components/nav';
import NavInferior from '../components/navInferior';

const Acessibilidade = () => {
  const [espaco, setEspaco] = useState(false);
  const [contraste, setContraste] = useState(false);
  const [textoGrande, setTextoGrande] = useState(false);

  // Classe dinâmica no container principal
  const bodyClasses = [
    espaco ? styles.espacamentoTexto : '',
    contraste ? styles.altoContraste : '',
    textoGrande ? styles.textoGrande : ''
  ].join(' ');

  return (
    <>  
    <Nav />
    <NavInferior />
    <div className={bodyClasses}>

      {/* TÍTULO */}
      <h2>Acessibilidade</h2>

      {/* CARDS */}
      <div className={styles.container}>
        <div className={styles.card}>
          <p>Espaçamento do texto</p>
          <div className={styles.icon}>CC</div>
          <label className={styles.switch}>
            <input type="checkbox" checked={espaco} onChange={() => setEspaco(!espaco)} />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.card}>
          <p>Mudança de contraste</p>
          <div className={styles.icon}>CC</div>
          <label className={styles.switch}>
            <input type="checkbox" checked={contraste} onChange={() => setContraste(!contraste)} />
            <span className={styles.slider}></span>
          </label>
        </div>

        <div className={styles.card}>
          <p>Aumento do texto</p>
          <div className={styles.icon}>CC</div>
          <label className={styles.switch}>
            <input type="checkbox" checked={textoGrande} onChange={() => setTextoGrande(!textoGrande)} />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
    </>
  );
}

export default Acessibilidade;
