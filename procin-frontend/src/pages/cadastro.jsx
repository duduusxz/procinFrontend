import React, { useState, useEffect, useRef } from "react";
import styles from "../style/cadastro.module.css";
import logo from '../assets/logo_preta.png';
import { useNavigate } from "react-router-dom";

function Cadastro() {
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

  const [selectedUserType, setSelectedUserType] = useState("Selecione...");
  const [userTypeValue, setUserTypeValue] = useState("");
  const [isUserTypeDropdownOpen, setIsUserTypeDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userTypeRef = useRef(null);
  const navigate = useNavigate();

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

  const userTypeOptions = [
    { value: "vendedor_prestador", label: "Vendedor/prestador" },
    { value: "usuario", label: "Usuário Comum" },
    { value: "loja", label: "Loja" },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const toggleUserTypeDropdown = () => {
    setIsUserTypeDropdownOpen(!isUserTypeDropdownOpen);
  };

  const handleUserTypeSelect = (option) => {
    setSelectedUserType(option.label);
    setUserTypeValue(option.value);
    setIsUserTypeDropdownOpen(false);
  };

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

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (!validarCampos()) return;

    try {
      const resposta = await fetch("http://localhost:8081/auth/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // <-- ESSENCIAL: permite envio/recebimento de cookies
        body: JSON.stringify({
          nome: formData.nomeUsuario,
          telefone: formData.telefoneUsuario,
          senha: formData.senhaUsuario,
          cep: formData.cepUsuario,
          complemento: formData.complementoUsuario,
          email: formData.emailUsuario,
          numero: formData.numeroUsuario,
          nascimento: formData.nascimentoUsuario,
          tipo_usuario: userTypeValue,
        }),
      });

      const data = await resposta.json();

      if (!resposta.ok || data.status === false) {
        throw new Error(data.message || "Erro ao realizar o cadastro.");
      }

      if (data.status === "success") {
        // 🔐 Access token pode ficar no localStorage (se quiser)
        if (data.access) {
          localStorage.setItem("access_token", data.access);
        }

        // ❌ Refresh token NÃO será salvo no localStorage.
        // ✅ Ele vem em cookie HttpOnly do backend automaticamente (invisível no JS).

        if (userTypeValue === "usuario") {
          alert("Cadastro concluído com sucesso!");
          navigate("/");
        } else {
          setIsModalOpen(true);
        }
      } else {
        alert("Cadastro concluído com sucesso!");
        navigate("/");
      }
    } catch (erro) {
      console.error("Erro:", erro);
      alert(erro.message);
    }
  };

  const handleSimClick = () => {
    setIsModalOpen(false);
    navigate("/tipoDeficiencia");
  };

  const handleNaoClick = () => {
    setIsModalOpen(false);
    alert("Cadastro concluído com sucesso!");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userTypeRef.current && !userTypeRef.current.contains(event.target)) {
        setIsUserTypeDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const IrParaHome = () => navigate("/");
  const IrParaLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

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
                className={styles.nomeUsuario}
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
                  <img src="Images/Brasil.png" className={styles.countryFlag} alt="BR" />
                  +55
                </button>
                <input
                className={styles.telefoneUsuario}
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
                className={styles.senhaUsuario}
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
                className={styles.cepUsuario}
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
                className={styles.confirmarUsuario}
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
                className={styles.complementoUsuario}
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
                className={styles.emailUsuario}
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
                className={styles.numeroUsuario}
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
                className={styles.nascimentoUsuario}
                id="nascimentoUsuario"
                type="date"
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
                    <li key={option.value} onClick={() => handleUserTypeSelect(option)}>
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botão */}
            <button type="submit" className={styles.cadastrar}>
              Cadastrar
            </button>

            <p>
              <a href="#" onClick={IrParaLogin}>Fazer Login</a>
            </p>

            <input type="hidden" name="tipo_conta" />
          </form>
        </div>

        {/* Modal */}
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
