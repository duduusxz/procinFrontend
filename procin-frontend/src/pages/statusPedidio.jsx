import React from "react";
import styles from "../style/statusPedido.module.css";
import { FaCheck } from "react-icons/fa";
import Nav from "../components/nav";
import NavInferior from "../components/navInferior";

export default function StatusPedido() {
  const etapas = [
    { id: 1, nome: "Recebimento do Pedido", concluido: true },
    { id: 2, nome: "Pagamento", concluido: true },
    { id: 3, nome: "Produção", concluido: false },
    { id: 4, nome: "Produto Enviado", concluido: true },
    { id: 5, nome: "Entrega", concluido: false },
  ];

  return (
    <>
    <Nav />
    <NavInferior />
    <div className={styles.container}>
      <div className={styles.timeline}>
        {etapas.map((etapa, index) => (
          <React.Fragment key={etapa.id}>
            <div className={styles.step}>
              {etapa.concluido && (
                <div className={styles.iconConcluido}>
                  <FaCheck />
                </div>
              )}
              <div className={styles.circle}>{etapa.id}</div>
              <span className={styles.label}>{etapa.nome}</span>
            </div>

            {index < etapas.length - 1 && <div className={styles.line}></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
    </>
  );
}
