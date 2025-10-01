import React, { useState } from 'react';
import './adicionar_produto.css';

const AdicionarProduto = () => {
  const [formData, setFormData] = useState({
    nome_produto: '',
    descricao_produto: '',
    categoria_produto: '1',
    variacao_produto: '',
    preco_produto: '',
    estoque_produto: '',
    peso_produto: '',
    tamanho_produto: '',
  });

  const [imagemProduto, setImagemProduto] = useState(null);
  const [showFotoContainer, setShowFotoContainer] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImagemProduto(e.target.files[0]);
  };

  const click_confirmar_informacoes = (e) => {
    e.preventDefault();

    const requiredFields = [
      'nome_produto',
      'descricao_produto',
      'categoria_produto',
      'variacao_produto',
      'preco_produto',
      'estoque_produto',
      'peso_produto',
      'tamanho_produto',
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
      }
    }

    setShowFotoContainer(true);
  };

  const click_confirmar_foto = (e) => {
    e.preventDefault();
    if (!imagemProduto) {
      alert('Selecione uma foto do produto!');
      return;
    }
    alert('Foto adicionada com sucesso!');
    setShowFotoContainer(false);
    // Aqui você pode adicionar a lógica para enviar a foto
  };

  return (
    <>
      {/* MENU SUPERIOR */}
      <nav className="nav-top">
        <div className="logo">
          <img src="#" alt="Logo Soma" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." />
          <button type="submit"><i className="fas fa-search"></i></button>
        </div>
        <div className="user-actions">
          <div className="icons">
            <a href="#"><i className="far fa-heart"></i></a>
            <a href="#"><i className="fas fa-shopping-cart"></i></a>
            <a href="#"><i className="far fa-user"></i></a>
          </div>
          <div className="welcome-message">
            <span>Bem-vindo, <a href="#">Entre ou Cadastre-se</a></span>
          </div>
        </div>
      </nav>

      <div className="nav-bar">
        <a href="#"><i className="fa fa-bars"></i> Tem no Soma </a>
        <a href="#">Serviços</a>
        <a href="#">Produtos</a>
        <a href="#">Meus Pedidos</a>
      </div>

      {/* PARTE FORMULÁRIO */}
      <main>
        <h2 className="title">Adicionar Produtos</h2>
        <form className="formulario_informacoes">
          <div className="container">
            <div className="column_label">
              <label className="legenda_produto">*Nome do produto:</label>
              <label className="descricao">*Descrição</label>
              <label className="legenda_produto">*Categoria:</label>
              <label className="legenda_produto">*Variações:</label>
              <label className="legenda_produto">*Preço (R$):</label>
              <label className="legenda_produto">*Estoque:</label>
              <label className="legenda_produto">*Peso (Kg):</label>
              <label className="legenda_produto">*Tamanho do pacote (cm):</label>
            </div>

            <div className="column_input">
              <input
                type="text"
                name="nome_produto"
                id="nome_produto"
                className="input_produto"
                value={formData.nome_produto}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="descricao_produto"
                id="descricao"
                className="input_produto_descricao"
                value={formData.descricao_produto}
                onChange={handleInputChange}
                required
              ></textarea>
              <select
                className="input_produto"
                name="categoria_produto"
                id="categoria_produto"
                value={formData.categoria_produto}
                onChange={handleInputChange}
                required
              >
                <option value="1">Categoria-1</option>
                <option value="2">Categoria-2</option>
                <option value="3">Categoria-3</option>
                <option value="4">Categoria-4</option>
                <option value="5">Categoria-5</option>
                <option value="6">Categoria-6</option>
                <option value="7">Categoria-7</option>
                <option value="8">Categoria-8</option>
              </select>
              <input
                type="text"
                name="variacao_produto"
                id="variacao_produto"
                className="input_produto"
                value={formData.variacao_produto}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="preco_produto"
                id="preco_produto"
                className="input_produto"
                value={formData.preco_produto}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="estoque_produto"
                id="estoque_produto"
                className="input_produto"
                value={formData.estoque_produto}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="peso_produto"
                id="peso_produto"
                className="input_produto"
                value={formData.peso_produto}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="tamanho_produto"
                id="tamanho_produto"
                className="input_produto"
                value={formData.tamanho_produto}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="adicionar_confirmar"
            onClick={click_confirmar_informacoes}
          >
            Confirmar
          </button>
        </form>
      </main>

      {showFotoContainer && (
        <div className="fundo_container_foto" style={{ display: 'flex' }}>
          <div className="adicionar_foto_container">
            <form className="formulario_foto">
              <label htmlFor="imagem_produto" className="legenda_foto">
                Adicionar foto do Produto
              </label>
              <label htmlFor="imagem_produto" className="label_foto"></label>
              <input
                type="file"
                name="imagem_produto"
                id="imagem_produto"
                className="input_foto"
                onChange={handleFileChange}
                required
              />
              <button
                type="submit"
                className="confirmar_foto"
                onClick={click_confirmar_foto}
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdicionarProduto;
