import styles from '../style/sidebarPerfil.module.css'
import logo from '../assets/logo_preta.png'
import usuario from '../assets/usuario.webp'

function PerfilLateral() {
  return (
    <>
    <div className={styles.perfil_lateral}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo" id='logo'/>
        </div>

        <div className={styles.conteudo}>
            <img src={usuario} alt="Foto de perfil"className={styles.imagem_usuario}/>
            <p id={styles.nome_usuario}>Nome do Uuário</p>
            <p id={styles.descricao_usuario}>Descrição sobre usuário. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>Editar perfil</button>
            <button>Mensagens</button>
            <button>Meus serviços</button>
            <hr />
            <p id={styles.nota_perfil}>Nota do perfil: 4,9 </p>
        </div>    
    </div>
    </>
  )
}

export default PerfilLateral