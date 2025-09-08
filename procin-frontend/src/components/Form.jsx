import styles from './Form.module.css'

function FormCadastro(){
    return (
        <form method="post" className={styles.form_cadastro}>
            <label htmlFor="">Nome de Usuário</label>
            <input type="text" className="nome_usuario" name="nome_usuario"/>

            <label htmlFor="">Email do Usuário</label>
            <input type="text" className="email_usuario" name="email_usuario"/>

            <label htmlFor="">Senha do Usuário</label>
            <input type="text" className="senha_usuario" name="senha_usuario"/>

            <label htmlFor="">Data de Nascimento</label>
            <input type="text" className="nascimento_usuario" name="nascimento_usuario"/>

        </form>
    )
}

export default FormCadastro