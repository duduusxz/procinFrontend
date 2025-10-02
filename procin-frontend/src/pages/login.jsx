import React, { useState } from "react";
import styles from "../style/login.module.css";
import iconSenha from "../assets/iconSenha.png"
import logo from '../assets/logo_preta.png'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function clickEntrar(e) {
    e.preventDefault();

    const json = { email, senha };
    const informacoes_login = JSON.stringify(json);
    console.log(informacoes_login);

    // Aqui você pode implementar a lógica para enviar os dados ao back-end
  }

  return (
    <>
      <img src={logo} alt="Logo SOMA" className={styles.logo} />

      <div className={styles.container}>
        <h2 className={styles.title}>Login</h2>

        <form className={styles.form} method="post" onSubmit={clickEntrar}>
          <label className={styles.label} htmlFor="email_usuario">
            Usuário
          </label>
          <input
            className={styles.input}
            type="text"
            name="email_usuario"
            id="email_usuario"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.label} htmlFor="senha_usuario">
            Senha
          </label>

          <div className={styles.inputContainer}>
            <input
              className={`${styles.input} ${styles.inputContainerInput}`}
              type={showPassword ? "text" : "password"}
              name="senha_usuario"
              id="senha_usuario"
              minLength={8}
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <img
              className={styles.iconEye}
              src={iconSenha}
              onClick={togglePassword}
              alt={showPassword ? "Esconder senha" : "Mostrar senha"}
            />
          </div>

          <a href="#" className={styles.link}>
            Esqueci a senha
          </a>

          <button type="button" className={styles.loginGoogle}></button>

          <button type="submit" className={styles.entrarLogin}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}
