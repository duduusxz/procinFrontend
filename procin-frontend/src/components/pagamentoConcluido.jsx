import styles from "../style/pagamento.module.css"

export default function PagamentoConcluido(){
    return(
        <div className={styles.modal}>
            <span className={styles.closeBtn}>
             &times;
            </span>
            <div className={`${styles.icon} ${styles.success}`}>&#10004;</div>
            <h2>Compra finalizada com sucesso!</h2>
            <p>O pagamento foi realizado.</p>
        </div>
    )
}