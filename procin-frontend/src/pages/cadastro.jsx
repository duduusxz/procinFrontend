import React, { useState, useEffect, useRef } from "react";
import styles from "../style/cadastro.module.css";
import logo from '../assets/logo_preta.png'
import { useNavigate } from "react-router-dom";

function Cadastro() {
  // Estados para os campos do formulário
  const [formData, setFormData] = useState({
    nomeUsuario: "",
    telefoneUsuario: "",
    senhaUsuario: "",
    cepUsuario: "",
    confirmarUsuario: "",
    complementoUsuario: "",
    emailUsuario: "",
    numeroUsuario: "",
    nascimentoUsuario: "",
  });

  // Estados para controles da interface
  const [selectedUserType, setSelectedUserType] = useState("Selecione...");
  const [userTypeValue, setUserTypeValue] = useState("");
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Referências
  const userTypeRef = useRef(null);

  // Campos obrigatórios
  const requiredFields = [
    "nomeUsuario",
    "telefoneUsuario",
    "senhaUsuario",
    "cepUsuario",
    "confirmarUsuario",
    "emailUsuario",
    "numeroUsuario",
    "nascimentoUsuario",
  ];

  // Opções de tipo de usuário
  const userTypeOptions = [
    { value: "usuario", label: "Usuário Comum" },
    { value: "vendedor", label: "Vendedor" },
    { value: "prestador", label: "Prestador de serviços" },
  ];

  // Atualizar inputs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Alternar dropdown
  const toggleUserTypeDropdown = () => {
    setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen);
  };

  // Selecionar tipo
  const handleUserTypeSelect = (option) => {
    setSelectedUserType(option.label);
    setUserTypeValue(option.value);
    setIsUserTypeDropdownOpen(false);
  };

  // Validação
  const validarCampos = () => {
    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        document.getElementById(field)?.focus();
        return false;
      }
    }

    if (formData.senhaUsuario !== formData.confirmarUsuario) {
      alert("As senhas não coincidem.");
      return false;
    }

    if (!userTypeValue) {
      alert("Selecione o tipo de usuário.");
      return false;
    }

    return true;
  };

  // Cadastro
  const handleCadastro = (e) => {
    e.preventDefault();

    if (!validarCampos()) return;

    if (userTypeValue === "usuario") {
        alert("Cadastro concluído com sucesso!");
        navigate("/"); // redireciona sem recarregar
      } else {
        setIsModalOpen(true); // mostra o modal
      }
  };

  // Modal "Sim"
    const handleSimClick = () => {
      navigate("/tipoDeficiencia"); // exemplo de rota
    };

    const handleNaoClick = () => {
      setIsModalOpen(false);
      alert("Cadastro concluído com sucesso!");
      navigate("/"); // volta pra home sem reload
    };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userTypeRef.current && !userTypeRef.current.contains(event.target)) {
        setIsUserTypeDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate()

    function IrParaHome(){
      navigate("/")
    }

    function IrParaLogin(){
      navigate("/login")
    }

  return (
    <>
    <img src={logo} alt="Logo" className={styles.logo} onClick={IrParaHome} />

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>Cadastro</div>

        <form onSubmit={handleCadastro}>
          {/* Nome */}
          <div className={styles.inputContainer}>
            <label htmlFor="nomeUsuario">Nome</label>
            <input
              type="text"
              id="nomeUsuario"
              placeholder="Digite seu nome"
              value={formData.nomeUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Telefone */}
          <div className={styles.inputContainer}>
            <label htmlFor="telefoneUsuario">Telefone</label>
            <div className={styles.phoneContainer}>
              <button type="button" className={styles.countryBtn}>
                <img
                  src="Images/Brasil.png"
                  className={styles.countryFlag}
                  alt="BR"
                />
                +55
              </button>

              <input
                type="tel"
                id="telefoneUsuario"
                placeholder="(XX) XXXXX-XXXX"
                value={formData.telefoneUsuario}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Senha */}
          <div className={styles.inputContainer}>
            <label htmlFor="senhaUsuario">Senha</label>
            <input
              type="password"
              id="senhaUsuario"
              placeholder="Digite sua senha"
              value={formData.senhaUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* CEP */}
          <div className={styles.inputContainer}>
            <label htmlFor="cepUsuario">CEP</label>
            <input
              type="text"
              id="cepUsuario"
              placeholder="Digite seu CEP"
              value={formData.cepUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Confirmar senha */}
          <div className={styles.inputContainer}>
            <label htmlFor="confirmarUsuario">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarUsuario"
              placeholder="Confirme sua senha"
              value={formData.confirmarUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Complemento */}
          <div className={styles.inputContainer}>
            <label htmlFor="complementoUsuario">Complemento</label>
            <input
              type="text"
              id="complementoUsuario"
              placeholder="Digite o complemento"
              value={formData.complementoUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className={styles.inputContainer}>
            <label htmlFor="emailUsuario">Email</label>
            <input
              type="email"
              id="emailUsuario"
              placeholder="Digite seu email"
              value={formData.emailUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Número */}
          <div className={styles.inputContainer}>
            <label htmlFor="numeroUsuario">Número</label>
            <input
              type="text"
              id="numeroUsuario"
              placeholder="Digite o número"
              value={formData.numeroUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Data de nascimento */}
          <div className={styles.inputContainer}>
            <label htmlFor="nascimentoUsuario">Data de nascimento</label>
            <input
              id="nascimentoUsuario"
              type="date"
              placeholder="dd/mm/aaaa"
              value={formData.nascimentoUsuario}
              onChange={handleInputChange}
            />
          </div>

          {/* Tipo de Usuário */}
          <div className={styles.userTypeContainer} ref={userTypeRef}>
            <label>Selecione o tipo de Usuário</label>
            <button
              type="button"
              className={styles.userTypeBtn}
              onClick={toggleUserTypeDropdown}
            >
              <span>{selectedUserType}</span>
            </button>

            <div
              className={`${styles.userTypeDropdown} ${
                isUserTypeDropdownOpen ? styles.active : ""
              }`}
            >
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
          <div className={`${styles.inputContainer} ${styles.google}`}>
          </div>

          {/* Botão */}
          <button type="submit" className={styles.cadastrar}>
            Cadastrar
          </button>

          <p><a href="" onClick={IrParaLogin}>Fazer Login</a></p>
        </form>
      </div>

      <div className={`${styles.modal} ${isModalOpen ? styles.active : ""}`}>
          <div className={styles.modalContent}>
            <p>Você possui alguma deficiência?</p>
            <button onClick={handleSimClick}>Sim</button>
            <button onClick={handleNaoClick}>Não</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;