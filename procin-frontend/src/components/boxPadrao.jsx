import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import styles from '../style/boxPadrao.module.css';
import Produto from '../assets/produto.png';

const BoxPadrao = ({
  nomeProduto = "Adicione o nome de um produto",
  localizacao = "Adicionar localização",
  preco = "R$ 00,00",
  imagemSrc = Produto 
}) => {
  const handleAdicionarCarrinho = () => {
    console.log(`Produto "${nomeProduto}" adicionado ao carrinho!`);
  };

  const handleFavoritar = () => {
    console.log(`Produto "${nomeProduto}" favoritado/desfavoritado!`);
  };

  return (
    <div className={styles.boxPadrao}>
      <div className={styles.conteudoBox}>
        
        {/* Lado esquerdo: Imagem */}
        <div className={styles.imagemProduto}>
          <img src={imagemSrc} alt={`Imagem de ${nomeProduto}`} />
        </div>

        {/* Lado direito: Informações e Ações */}
        <div className={styles.informacoesProduto}>
          <h2 className={styles.nomeProduto}>{nomeProduto}</h2>
          
          <p className={styles.localizacao}>
            <span className={styles.iconeLocalizacao}><IoLocationSharp /></span> {localizacao}
          </p>

          <p className={styles.preco}>{preco}</p>

          <div className={styles.acoes}>
            <button 
              className={styles.btnCarrinho}
              onClick={handleAdicionarCarrinho}
            >
              Adicionar no Carrinho
            </button>
            
            <button 
              className={styles.btnFavoritar}
              onClick={handleFavoritar}
              aria-label="Favoritar Produto"
            >
              <span role="img" aria-label="Coração"><FcLike /></span> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxPadrao;