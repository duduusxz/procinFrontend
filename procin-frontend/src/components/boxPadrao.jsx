import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import styles from '../style/boxPadrao.module.css';
import Produto from '../assets/produto.png';
import { useNavigate } from "react-router-dom";

const BoxPadrao = ({
  nomeProduto = "Adicione o nome de um produto",
  localizacao = "Adicionar localização",
  preco = "R$ 00,00",
  imagemSrc = Produto 
}) => {
  const navigate = useNavigate();
  const [favoritado, setFavoritado] = useState(false);

  // Verifica se o produto já está favoritado ao carregar
  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some(
      (f) => f.nome === nomeProduto && f.localizacao === localizacao
    );
    setFavoritado(existe);
  }, [nomeProduto, localizacao]);

  // Adicionar produto ao carrinho (e ir pra /carrinho)
  const handleAdicionarCarrinho = () => {
    const novoProduto = {
      nome: nomeProduto,
      localizacao,
      preco,
      imagem: imagemSrc,
    };

    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(novoProduto);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

    navigate("/carrinho");
  };

  // Favoritar produto (sem sair da página)
  const handleFavoritar = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some(
      (f) => f.nome === nomeProduto && f.localizacao === localizacao
    );

    let novosFavoritos;
    if (existe) {
      // Se já existe, remove
      novosFavoritos = favoritos.filter(
        (f) => !(f.nome === nomeProduto && f.localizacao === localizacao)
      );
      setFavoritado(false);
    } else {
      // Se não existe, adiciona
      const novoFavorito = {
        nome: nomeProduto,
        localizacao,
        preco,
        imagem: imagemSrc,
      };
      novosFavoritos = [...favoritos, novoFavorito];
      setFavoritado(true);
    }

    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
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
              className={`${styles.btnFavoritar} ${favoritado ? styles.favoritado : ""}`}
              onClick={handleFavoritar}
              aria-label="Favoritar Produto"
            >
              <FcLike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxPadrao;
