import React, { useState } from "react";
import styles from "../style/login.module.css";
import iconSenha from "../assets/iconSenha.png";
import logo from '../assets/logo_preta.png';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword(prev => !prev);
  }

  async function clickEntrar(e) {
    e.preventDefault();

    try {
      const resposta = await fetch("http://soma-development.page.gd/auth/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
        credentials: "include",
      });

      if (!resposta.ok) {
        throw new Error("Usuário ou senha incorretos");
      }

      const data = await resposta.json();

      // Armazena os tokens no localStorage
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      navigate("/");
    } catch (erro) {
      alert(erro.message);
    }
  }

  function IrParaHome() {
    navigate("/");
  }

  function IrParaCadastro() {
    navigate("/cadastro");
  }

  return (
    <>
      <img src={logo} alt="Logo SOMA" className={styles.logo} onClick={IrParaHome} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.title}>Login</h2>
          <form className={styles.form} method="post" onSubmit={clickEntrar}>
            <label className={styles.label} htmlFor="email_usuario">Usuário</label>
            <input
              className={styles.input}
              type="text"
              id="email_usuario"
              required
              placeholder="Digite seu email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label className={styles.label} htmlFor="senha_usuario">Senha</label>
            <div className={styles.inputContainer}>
              <input
                className={`${styles.input} ${styles.inputContainerInput}`}
                type={showPassword ? "text" : "password"}
                id="senha_usuario"
                minLength={8}
                placeholder="Digite sua senha"
                required
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
              <img
                className={styles.iconEye}
                src={iconSenha}
                onClick={togglePassword}
                alt={showPassword ? "Esconder senha" : "Mostrar senha"}
              />
            </div>
            <a href="#" className={styles.link}>Esqueci a senha</a>
            <button type="submit" className={styles.entrarLogin}>Entrar</button>
            <p><a onClick={IrParaCadastro}>Cadastre-se</a></p>
          </form>
        </div>
      </div>
    </>
  );
}
