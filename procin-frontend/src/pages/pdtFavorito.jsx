import React, { useEffect, useState } from "react";
import Nav from "../components/nav.jsx";
import NavInferior from "../components/navInferior.jsx";
import CardProduto from "../components/cardProduto.jsx";
import styles from "../style/pdtFavorito.module.css";

export default function PdtFavorito() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(favoritosSalvos);
  }, []);

  const removerFavorito = (id) => {
    const atualizados = favoritos.filter((f) => f.id !== id);
    setFavoritos(atualizados);
    localStorage.setItem("favoritos", JSON.stringify(atualizados));
  };

  return (
    <div>
      <Nav />
      <NavInferior />

      <main className={styles.wrapper}>
        {favoritos.length === 0 ? (
          <p className={styles.vazio}>
            Você ainda não favoritou nenhum produto ❤️
          </p>
        ) : (
          <div className={styles.produtosLista}>
            {favoritos.map((fav, index) => (
              <CardProduto
                key={fav.id}
                idx={index}
                nome={fav.nome}
                localizacao={fav.localizacao}
                preco={fav.preco}
                imagem={fav.imagem}
                isFavoritoPage={true}
                onRemoverFavorito={removerFavorito}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
