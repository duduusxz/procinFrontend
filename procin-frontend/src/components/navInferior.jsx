import styles from "../style/home.module.css"

export default function NavInferior(){
    return(
        <nav className={styles.navInferior}>
                <div>
                    <p>Tem no soma</p>
                    <p>Serviços</p>
                    <p>Produtos</p>
                    <p>Meus pedidos</p>
                </div>
        </nav>
    )
}