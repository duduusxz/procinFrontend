import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style/produto.module.css";
import Navbar from "../components/nav.jsx";
import NavInferior from "../components/navInferior";
import ProdutoImagem1 from "../assets/produto.jpg"
import ProdutoImagem2 from "../assets/produto2.jpg"
import ProdutoImagem3 from "../assets/produto3.jpg"
import ProdutoImagem4 from "../assets/produto4.jpg"
import { useNavigate } from "react-router-dom";

export default function Pergunta() {
  const Produto = {
    nome: "Camiseta Estampada",
    preco: "R$ 49,90",
    descricao: "Camiseta 100% algodão com estampa exclusiva.",
    localizacao: "São Paulo, SP",
    vendedor: "Loja de Roupas XYZ",
  };

  // Desestruturando os dados de Produto
  const { nome, preco, descricao, localizacao, vendedor } = Produto;

  const imagens = [
    ProdutoImagem1,
    ProdutoImagem2,
    ProdutoImagem3,
    ProdutoImagem4
  ];
  const [imagemAtual, setImagemAtual] = useState(imagens[0]);

  const perguntas = [
    {
      id: 1,
      pergunta: `Qual é o tamanho disponível para a ${nome}?`,
      resposta: "Temos tamanhos P, M, G e GG.",
    },
    {
      id: 2,
      pergunta: `A ${nome} encolhe após a lavagem?`,
      resposta: "Não, a camiseta mantém o tamanho original.",
    },
    {
      id: 3,
      pergunta: `Qual é o prazo de entrega da ${nome}?`,
      resposta: "O prazo de entrega é de 5 a 7 dias úteis.",
    },
  ];

    const navigate = useNavigate()

    function IrParaPergunta(){
      navigate("/produtosPergunta")
    }

  // Função para exibir as perguntas e respostas
  function ExibirPerguntas() {
    return (
      <div className={styles.perguntas}>
        <h2>Perguntas Frequentes</h2>
        {perguntas.map((pergunta) => (
          <div key={pergunta.id} className={styles.perguntaItem}>
            <h3>{pergunta.pergunta}</h3>
            <p>{pergunta.resposta}</p>
          </div>
        ))}
      </div>
    );
  }

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
        <main className={styles.wrapper}>
          <div className={styles.lados}>
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
                <p>À vista</p>
              </div>
              <p>{descricao}</p>
            </div>
            <div className={styles.botoes}>
              <p>{localizacao}</p>
              <button className={styles.calcular}>
                Calcular o frete e prazo
              </button>
              <button className={styles.adicionar}>
                Adicionar ao carrinho
              </button>
              <p onClick={IrParaPergunta} className={styles.pergunta}>Enviar mensagem para o vendedor</p>
            </div>
            <div className={styles.vendedor}>
              <img src="/assets/vendedor.jpg" alt={vendedor} />
              <div className={styles.vendedorinfo}>
                <span className={styles.vendedornome}>{vendedor}</span>
                <span className={styles.vendedoricone}>⭐</span>
              </div>
              <button className={styles.visitarperfil}>Visitar Perfil</button>
            </div>
          </div>
          </div>
        </main>

        {/* Exibindo as perguntas frequentes aqui */}
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

          {/* Chamando o componente ExibirPerguntas aqui */}
          <ExibirPerguntas />
        </footer>
      </div>
    </div>
  );
}