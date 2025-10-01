import React, { useState, useEffect, useRef } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    nome_usuario: '',
    telefone_usuario: '',
    senha_usuario: '',
    cep_usuario: '',
    confirmar_usuario: '',
    complemento_usuario: '',
    email_usuario: '',
    numero_usuario: '',
    nascimento_usuario: ''
  });

  // Estados para controles da interface
  const [selectedUserType, setSelectedUserType] = useState('Selecione...');
  const [userTypeValue, setUserTypeValue] = useState('');
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Referências para elementos DOM
  const userTypeRef = useRef(null);

  // Campos obrigatórios
  const requiredFields = [
    "nome_usuario",
    "telefone_usuario", 
    "senha_usuario",
    "cep_usuario",
    "confirmar_usuario",
    "email_usuario",
    "numero_usuario",
    "nascimento_usuario"
  ];

  // Opções de tipo de usuário
  const userTypeOptions = [
    { value: 'usuario', label: 'Usuário Comum' },
    { value: 'vendedor', label: 'Vendedor' },
    { value: 'prestador', label: 'Prestador de serviços' }
  ];

  // Função para atualizar campos do formulário
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Função para alternar dropdown de tipo de usuário
  const toggleUserTypeDropdown = () => {
    setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen);
  };

  // Função para selecionar tipo de usuário
  const handleUserTypeSelect = (option) => {
    setSelectedUserType(option.label);
    setUserTypeValue(option.value);
    setIsUserTypeDropdownOpen(false);
  };

  // Função para validar campos
  const validarCampos = () => {
    // Verificar campos obrigatórios
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        document.getElementById(field)?.focus();
        return false;
      }
    }

    // Verificar se senhas coincidem
    if (formData.senha_usuario !== formData.confirmar_usuario) {
      alert("As senhas não coincidem.");
      return false;
    }

    // Verificar tipo de usuário
    if (!userTypeValue) {
      alert("Selecione o tipo de usuário.");
      return false;
    }

    return true;
  };

  // Função para lidar com o cadastro
  const handleCadastro = (e) => {
    e.preventDefault();

    if (!validarCampos()) return;

    if (userTypeValue === "usuario") {
      alert("Cadastro concluído com sucesso!");
      window.location.href = "index.html";
    } else {
      setIsModalOpen(true);
    }
  };

  // Função para lidar com resposta "Sim" no modal
  const handleSimClick = () => {
    window.location.href = "Deficiencia.html";
  };

  // Função para lidar com resposta "Não" no modal
  const handleNaoClick = () => {
    setIsModalOpen(false);
    alert("Cadastro concluído com sucesso!");
    window.location.href = "index.html";
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userTypeRef.current && !userTypeRef.current.contains(event.target)) {
        setIsUserTypeDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <img src="Images/SOMA.png" alt="Logo" className="logo" />
      </header>

      <div className="container">
        <div className="title">Cadastro</div>

        <form onSubmit={handleCadastro}>
          {/* Nome */}
          <div className="input-container">
            <label htmlFor="nome_usuario">Nome *</label>
            <input
              type="text"
              id="nome_usuario"
              placeholder="Digite seu nome"
              value={formData.nome_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Telefone com bandeira */}
          <div className="input-container">
            <label htmlFor="telefone_usuario">Telefone *</label>
            <div className="phone-container">
              <button type="button" className="country-btn" id="selectedCountry">
                <img src="Images/Brasil.png" className="country-flag" alt="BR" />
                +55
              </button>

              <input
                type="tel"
                id="telefone_usuario"
                placeholder="(XX) XXXXX-XXXX"
                value={formData.telefone_usuario}
                onChange={handleInputChange}
              />
              
              <div className="country-dropdown" id="countryDropdown">
                <input type="text" id="searchCountry" placeholder="Pesquisar país..." />
                <ul id="countryList"></ul>
              </div>
            </div>
          </div>

          {/* Senha */}
          <div className="input-container">
            <label htmlFor="senha_usuario">Senha *</label>
            <input
              type="password"
              id="senha_usuario"
              placeholder="Digite sua senha"
              value={formData.senha_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* CEP */}
          <div className="input-container">
            <label htmlFor="cep_usuario">CEP *</label>
            <input
              type="text"
              id="cep_usuario"
              placeholder="Digite seu CEP"
              value={formData.cep_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Confirmar senha */}
          <div className="input-container">
            <label htmlFor="confirmar_usuario">Confirmar Senha *</label>
            <input
              type="password"
              id="confirmar_usuario"
              placeholder="Confirme sua senha"
              value={formData.confirmar_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Complemento */}
          <div className="input-container">
            <label htmlFor="complemento_usuario">Complemento</label>
            <input
              type="text"
              id="complemento_usuario"
              placeholder="Digite o complemento"
              value={formData.complemento_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="input-container">
            <label htmlFor="email_usuario">Email *</label>
            <input
              type="email"
              id="email_usuario"
              placeholder="Digite seu email"
              value={formData.email_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Número */}
          <div className="input-container">
            <label htmlFor="numero_usuario">Número *</label>
            <input
              type="text"
              id="numero_usuario"
              placeholder="Digite o número"
              value={formData.numero_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Data de nascimento */}
          <div className="input-container">
            <label htmlFor="nascimento_usuario">Data de nascimento *</label>
            <input
              id="nascimento_usuario"
              type="date"
              placeholder="dd/mm/aaaa"
              value={formData.nascimento_usuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Tipo de Usuário */}
          <div className="userType-container" ref={userTypeRef}>
            <label htmlFor="tipo_usuario">Selecione o tipo de Usuário *</label>
            <button
              type="button"
              className="userType-btn"
              onClick={toggleUserTypeDropdown}
            >
              <span>{selectedUserType}</span>
            </button>
            <div className={`userType-dropdown ${isUserTypeDropdownOpen ? 'active' : ''}`}>
              <ul>
                {userTypeOptions.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleUserTypeSelect(option)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Google */}
          <div className="input-container google">
            <img src="Images/Google.png" alt="Google" />
          </div>

          {/* Botão */}
          <button type="submit" className="Cadastrar">
            Cadastrar
          </button>
        </form>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal" style={{ display: 'flex' }}>
            <div className="modal-content">
              <p>Você possui alguma deficiência?</p>
              <button onClick={handleSimClick}>Sim</button>
              <button onClick={handleNaoClick}>Não</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cadastro;