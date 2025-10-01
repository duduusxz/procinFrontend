import { useState } from "react";
import Nav from "../components/nav";
import NavInferior from "../components/navInferior";
import styles from "../style/editarProduto.module.css";

export default function EditarProduto() {
  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    variacao: "",
    preco: "",
    estoque: "",
    peso: "",
    tamanho: "",
  });

  // STATE DA FOTO
  const [mostrarFoto, setMostrarFoto] = useState(false);
  const [foto, setFoto] = useState(null);

  // FUNÇÃO PARA INPUTS DO FORM
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // FUNÇÃO DE CONFIRMAR INFORMAÇÕES
  function handleConfirmarInformacoes(e) {
    e.preventDefault();
    console.log("Formulário enviado:", form);
    setMostrarFoto(true); // abre modal de foto
  }

  // FUNÇÃO DE CONFIRMAR FOTO
  function handleConfirmarFoto(e) {
    e.preventDefault();
    console.log("Foto enviada:", foto);
    setMostrarFoto(false); // fecha modal
  }

  return (
    <>
      <Nav />
      <NavInferior />

      <main>
        <h2 className={styles.title}>Editar Produtos</h2>

        <form
          onSubmit={handleConfirmarInformacoes}
          className={styles.formularioInformacoes}
        >
          <div className={styles.container}>
            {/* Cada linha com label + input */}
            <div className={styles.formRow}>
              <label>Nome do produto:</label>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Descrição:</label>
              <textarea
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Categoria:</label>
              <select
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                required
              >
                <option value="">Selecione...</option>
                <option value="1">Categoria-1</option>
                <option value="2">Categoria-2</option>
                <option value="3">Categoria-3</option>
                <option value="4">Categoria-4</option>
                <option value="5">Categoria-5</option>
                <option value="6">Categoria-6</option>
                <option value="7">Categoria-7</option>
                <option value="8">Categoria-8</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label>Variações:</label>
              <input
                type="text"
                name="variacao"
                value={form.variacao}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Preço (R$):</label>
              <input
                type="text"
                name="preco"
                value={form.preco}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Estoque:</label>
              <input
                type="text"
                name="estoque"
                value={form.estoque}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Peso (Kg):</label>
              <input
                type="text"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formRow}>
              <label>Tamanho do pacote (cm):</label>
              <input
                type="text"
                name="tamanho"
                value={form.tamanho}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.adicionarConfirmar}>
            Confirmar
          </button>
        </form>
      </main>

      {/* UPLOAD DE FOTO */}
      {mostrarFoto && (
        <div className={styles.fundoContainerFoto}>
          <div className={styles.adicionarFotoContainer}>
            <form
              onSubmit={handleConfirmarFoto}
              className={styles.formularioFoto}
            >
              <label className={styles.legendaFoto}>
                Adicionar foto do Produto
              </label>

              <input
                type="file"
                name="imagem_produto"
                className={styles.inputFoto}
                onChange={(e) => setFoto(e.target.files[0])}
                required
              />

              <button type="submit" className={styles.confirmarFoto}>
                Confirmar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}