import { useState } from "react";
import Nav from "../components/nav";
import NavInferior from "../components/navInferior";
import styles from "../style/editarProduto.module.css";
import { useNavigate } from "react-router-dom";

export default function AdicionarProduto() {
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

  const [mostrarFoto, setMostrarFoto] = useState(false);
  const [foto, setFoto] = useState(null);

  const navigate = useNavigate();

  // Atualiza o estado conforme input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Envia os dados do produto para o backend
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // Se precisar enviar foto, use FormData (veja nota abaixo)
      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("Usuário não autenticado");
        navigate("/login"); // Ou rota de login
        return;
      }

      const produtoParaEnviar = {
        nome_produto: form.nome,
        descricao_produto: form.descricao,
        categoria_produto: form.categoria,
        variacao_produto: form.variacao,
        preco_produto: form.preco,
        estoque_produto: form.estoque,
        peso_produto: form.peso,
        tamanho_produto: form.tamanho,
      };

      const resposta = await fetch("http://localhost:8081/produtos/criarProduto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(produtoParaEnviar),
        credentials: "include",
      });

      const data = await resposta.json();

      if (data.status === false) {
        throw new Error(data.message || "Erro ao adicionar produto");
      }

      if (data.status === "success") {
        alert("Produto adicionado com sucesso!");
        setMostrarFoto(true); // Se quiser abrir modal da foto
        // Ou limpe o form
        setForm({
          nome: "",
          descricao: "",
          categoria: "",
          variacao: "",
          preco: "",
          estoque: "",
          peso: "",
          tamanho: "",
        });
      }
    } catch (erro) {
      alert(erro.message);
    }
  }

  // Função para enviar a foto (exemplo simples)
  async function handleConfirmarFoto(e) {
    e.preventDefault();

    try {
      if (!foto) {
        alert("Selecione uma foto");
        return;
      }

      const token = localStorage.getItem("access_token");
      if (!token) {
        alert("Usuário não autenticado");
        navigate("/login");
        return;
      }

      const formData = new FormData();
      formData.append("imagem_produto", foto);

      const resposta = await fetch("http://localhost:8081/auth/adicionarFoto", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
        credentials: "include",
      });

      const data = await resposta.json();

      if (data.status === "success") {
        alert("Foto adicionada com sucesso!");
        setMostrarFoto(false);
      } else {
        throw new Error(data.message || "Erro ao enviar foto");
      }
    } catch (erro) {
      alert(erro.message);
    }
  }

  return (
    <>
      <Nav />
      <NavInferior />

      <main className={styles.wrapper}>
        <h2 className={styles.title}>Adicionar Produto</h2>

        <form onSubmit={handleSubmit} className={styles.formularioInformacoes}>
          <div className={styles.container}>
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

      {mostrarFoto && (
        <div className={styles.fundoContainerFoto}>
          <div className={styles.adicionarFotoContainer}>
            <form onSubmit={handleConfirmarFoto} className={styles.formularioFoto}>
              <label className={styles.legendaFoto}>Adicionar foto do Produto</label>

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
