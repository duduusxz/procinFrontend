import styles from '../style/SidebarPerfil.module.css'
import logo from '../assets/logo_preta.png'

function PerfilLateral() {
  return (
    <>
    <div className={styles.perfil_lateral}>
        <div className={styles.logo}>
            <img src={logo} alt="Logo" id='logo'/>
        </div>
      
      <img src="/default.png" alt="Foto de perfil" />
      <p>Nome do Uuário</p>
    </div>
    </>
  )
}

export default PerfilLateral