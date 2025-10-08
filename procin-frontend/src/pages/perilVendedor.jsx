import React from "react";
import styles from "../style/perfilVendedor.module.css";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import Nav from "../components/nav";
import NavInferior from "../components/navInferior";
import CardProduto from "../components/cardProduto";

export default function PerfilVendedor() {
  const produtos = [
    {
      id: 1,
      nome: "Nome do Produto",
      local: "Brasil, São Paulo",
      preco: "R$ xx,xx",
      imagem:
        "https://m.media-amazon.com/images/I/61H+dY4-2HL._AC_SX679_.jpg",
    },
    {
      id: 2,
      nome: "Nome do Produto",
      local: "Brasil, São Paulo",
      preco: "R$ xx,xx",
      imagem:
        "https://m.media-amazon.com/images/I/61H+dY4-2HL._AC_SX679_.jpg",
    },
  ];

  return (
<>
<Nav />
<NavInferior />
    <div className={styles.container}>
      {/* Perfil */}
      <div className={styles.perfil}>
        <img
          src="https://i.pinimg.com/736x/8d/54/b8/8d54b8cbce39dfb3e8e6b5c86cb8b547.jpg"
          alt="Foto de perfil"
          className={styles.foto}
        />
        <div className={styles.info}>
          <h2>Nome</h2>
          <p className={styles.local}>
            <FaMapMarkerAlt /> Brasil, São Paulo
          </p>
          <p>
            <strong>8</strong> Pessoas visitaram esse perfil
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe, vero quae recusandae ipsam aspernatur iste inventore quo porro ipsa molestiae doloribus voluptas omnis cumque perspiciatis repellat! A, quaerat provident!  </p>
        </div>
        <div className={styles.estrelas}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg"
            alt="estrelas"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg"
            alt="estrelas"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg"
            alt="estrelas"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg"
            alt="estrelas"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Star_empty.svg"
            alt="estrelas"
          />
        </div>
      </div>

      {/* Lista de produtos */}
      <h3 className={styles.subtitulo}>Produtos/Serviços</h3>
      <div className={styles.grid}>
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
    </div>
    </>
  );
}
