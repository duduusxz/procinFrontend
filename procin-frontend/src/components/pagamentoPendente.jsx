import styles from "../style/pagamento.module.css"

export default function PagamentoPendente(){
    return(
        <div className={styles.modal}>
            <span className={styles.closeBtn}>
                &times;
            </span>
            <div className={styles.icon + " " + styles.pending}>&#9888;</div>
            <h2>Pagamento Pendente...</h2>
            <p>Aguardando confirmação do pagamento.</p>
        </div>
    )
}