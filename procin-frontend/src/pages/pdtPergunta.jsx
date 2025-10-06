import React, { useState } from "react";
import Nav from "../components/nav.jsx";
import { IoLocationSharp } from "react-icons/io5";
import NavInferior from "../components/navInferior.jsx";
import BotaoVoltar from "../components/botaoVoltar.jsx";
import styles from "../style/pdtPergunta.module.css";

export default function PdtPergunta() {
  {/*Produto estático*/}

  const Produto = {
    nome: "Nome do produto",
    localizacao: "São Paulo, SP",
    preco: "R$00,00",
    imagem: "../assets/produto.png",
  };

  const { nome, localizacao, preco, imagem } = Produto;

  {/*Controlador*/}

  const [pergunta, setPergunta] = useState("");
  const [comentarios, setComentarios] = useState([]);
  const [mensagem, setMensagem] = useState("");

  {/* Função para enviar a pergunta */}
  const handleEnviar = () => {
    if (pergunta.trim() === "") return;

    setComentarios([...comentarios, pergunta]);
    setMensagem("Sua pergunta foi enviada com sucesso!");
    setPergunta("");
    setTimeout(() => setMensagem(""), 5000);
  };

  return (
    <div className={styles.container}>
      <Nav />
      <NavInferior />
      <main className={styles.main}>
        <div className={styles.produto}>
          <img src={imagem} alt={`Imagem do produto: ${nome}`} />
          <div className={styles.info}>
            <p className={styles.nome}>{nome}</p>
            <p className={styles.localizacao}>
              <IoLocationSharp /> {localizacao}
            </p>
            <p className={styles.preco}>{preco}</p>
          </div>
        </div>
        <h1>O que você precisa saber sobre esse produto?</h1>
        <div className={styles.pergunta}>
          <textarea
            name="pergunta"
            id="pergunta"
            cols="30"
            rows="10"
            placeholder="Escreva sua pergunta aqui..."
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <button className={styles.enviar} onClick={handleEnviar}>
            Enviar Pergunta
          </button>
        </div>
        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        <div className={styles.comentarios}>
          <h2>Perguntas enviadas</h2>
          {comentarios.length === 0 ? (
            <p>Nenhuma pergunta ainda. Seja o primeiro!</p>
          ) : (
            <ul>
              {comentarios.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <BotaoVoltar />
    </div>
  );
}