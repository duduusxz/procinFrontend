import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/produto.module.css";
import Navbar from "../components/nav.jsx";
import NavInferior from "../components/navInferior";

export default function Pergunta() {
  const Produto = {
    nome: "Camiseta Estampada",
    preco: "R$ 49,90",
    descricao: "Camiseta 100% algodão com estampa exclusiva.",
    localizacao: "São Paulo, SP",
    vendedor: "Loja de Roupas XYZ",
  };

  const { nome, preco, descricao, localizacao, vendedor } = Produto;

  const imagens = [
    "/assets/produto1.jpg",
    "/assets/produto2.jpg",
    "/assets/produto3.jpg",
    "/assets/produto4.jpg",
  ];

  const [imagemAtual, setImagemAtual] = useState(imagens[0]);

  const perguntas = [
    {
      id: 1,
      pergunta: "Qual é o tamanho disponível?",
      resposta: "Temos tamanhos P, M, G e GG.",
    },
    {
      id: 2,
      pergunta: "A camiseta encolhe após a lavagem?",
      resposta: "Não, a camiseta mantém o tamanho original.",
    },
    {
      id: 3,
      pergunta: "Qual é o prazo de entrega?",
      resposta: "O prazo de entrega é de 5 a 7 dias úteis.",
    },
  ];

  function CardPergunta({ usuario, data, imagens, texto, likes }) {
    return (
      <div className={styles.cardPergunta}>
        <div className={styles.cardPerguntaTopo}>
          <img src={usuario.foto} alt={usuario.nome} />
          <span className={styles.cardPerguntaUsuario}>{usuario.nome}</span>
          <span className={styles.cardPerguntaData}>{data}</span>
        </div>
        <div className={styles.cardPerguntaImagens}>
          {imagens.map((img, idx) => (
            <img key={idx} src={img} alt={`imagem-${idx}`} />
          ))}
        </div>
        <div className={styles.cardPerguntaTexto}>{texto}</div>
        <div className={styles.cardPerguntaLikes}>
          <span>👍</span>
          <span>{likes}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <NavInferior />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.esquerda}>
            <div className={styles.galeria}>
              <div className={styles.miniaturas}>
                {imagens.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className={`${styles.thumbnail} ${
                      imagemAtual === img ? styles.ativa : ""
                    }`}
                    onClick={() => setImagemAtual(img)}
                  />
                ))}
              </div>

              <div className={styles.principal}>
                <img src={imagemAtual} alt="Imagem principal" />
              </div>
            </div>
          </div>

          <div className={styles.direita}>
            <progress></progress>
            <p>Vendido e entregue por Soma</p>
            <div className={styles.precificar}>
              <div className={styles.cartao}>
                <p>
                  Cartão de crédito <br /> sem juros
                </p>
                <p>{preco}</p>
              </div>
              <div className={styles.valor}>
                <p>{preco}</p>
                <p>Á vista</p>
              </div>
              <p>Descrição do Produto</p>
            </div>
            <div className={styles.botoes}>
              <p>{localizacao}</p>
              <button className={styles.calcular}>
                Calcular o frete e prazo
              </button>
              <button className={styles.adicionar}>
                Adicionar ao carrinho
              </button>
              <p>Enviar mensagem para o vendedor</p>
            </div>
            <div className={styles.vendedor}>
              <img src="url-da-foto" alt="Foto do vendedor" />
              <div className={styles.vendedorinfo}>
                <span className={styles.vendedornome}>Nome Vendedor</span>
                <span className={styles.vendedoricone}>{/* ícone aqui */}</span>
              </div>
              <button className={styles.visitarperfil}>Visitar Perfil</button>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <div className={styles.avaliacoes}>
            <h1>Avaliação de Produto</h1>
            <p>⭐⭐⭐⭐⭐ (4.8 de 5)</p>
          </div>
          <div style={{ width: "98vw", maxWidth: "1200px", margin: "0 auto" }}>
            <CardPergunta
              usuario={{ nome: "Flaco Lopez", foto: "/assets/avatar.jpg" }}
              data="11/09/2025 18:00"
              imagens={["/assets/produto.png", "/assets/produto2.jpg"]}
              texto="avanti palestra"
              likes={143}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
