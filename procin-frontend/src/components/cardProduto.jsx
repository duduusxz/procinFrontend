import React, { useEffect, useState } from "react";
import gostar from "../assets/gostar.png";
import produtoImg from "../assets/produto.jpg";
import styles from "../style/home.module.css";
import { useNavigate } from "react-router-dom";

export default function CardProduto({
  idx = null,
  nome = "Nome produto",
  localizacao = "Localização",
  preco = 0.0,
  imagem = produtoImg,
  toggleFavorito,
  isFavoritoPage = false, // indica se está na página de favoritos
  onRemoverFavorito, // callback pra remover da lista ao vivo
}) {
  const navigate = useNavigate();
  const [favoritado, setFavoritado] = useState(false);

  const produtoId = idx ?? `${nome}-${localizacao}`;

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favs.some((f) => f.id === produtoId);
    setFavoritado(existe);
  }, [produtoId]);

  // Adicionar/remover favoritos
  const handleFavoritar = (e) => {
    e.stopPropagation(); // previne abrir /produtos

    const favoritosAtuais = JSON.parse(localStorage.getItem("favoritos")) || [];
    const jaExisteIndex = favoritosAtuais.findIndex((f) => f.id === produtoId);
    let novosFavoritos;

    if (jaExisteIndex >= 0) {
      // remover
      novosFavoritos = favoritosAtuais.filter((_, i) => i !== jaExisteIndex);
      setFavoritado(false);

      if (isFavoritoPage && typeof onRemoverFavorito === "function") {
        onRemoverFavorito(produtoId);
      }
    } else {
      // adicionar
      const novoFavorito = { id: produtoId, nome, localizacao, preco, imagem };
      novosFavoritos = [...favoritosAtuais, novoFavorito];
      setFavoritado(true);
    }

    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

    if (typeof toggleFavorito === "function") toggleFavorito(idx);
  };

  // Adicionar ao carrinho
  const adicionarAoCarrinho = (e) => {
    e.stopPropagation(); // previne abrir /produtos
    const novoProduto = { id: produtoId, nome, localizacao, preco, imagem };
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinhoAtual.push(novoProduto);
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    navigate("/meuCarrinho");
  };

  // Abrir página de detalhes/produtos ao clicar no card
  const abrirProduto = () => {
    navigate("/produtos");
  };

  return (
    <div className={styles.bloco} onClick={abrirProduto}>
      <img src={imagem} alt={nome} className={styles.imagemProduto} />

      <div className={styles.inferior}>
        <h2>{nome}</h2>
        <p>{localizacao}</p>
        <h2>R$ {preco.toFixed ? preco.toFixed(2) : preco}</h2>

        <div className={styles.botoes}>
          <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button>

          <img
            src={gostar}
            alt="Favoritar"
            className={favoritado ? styles.coracaoAtivo : styles.coracao}
            onClick={handleFavoritar}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={styles.estrelas}>
          <span>★ ★ ★ ★ ☆</span> 4.0
        </div>
      </div>
    </div>
  );
}
