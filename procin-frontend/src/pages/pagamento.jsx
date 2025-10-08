import React from "react";
import styles from "../style/pagamentoProcesso.module.css";
import Nav from "../components/nav.jsx"
import NavInferior from "../components/navInferior.jsx"

export default function Pagamento() {
  return (
    <div className={styles.tudo}>
    <Nav />
    <NavInferior />
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Endereço de entrega</h2>

      <div className={styles.endereco}>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Telefone" />
        <select>
          <option>Endereço</option>
          <option>Rua A, 123</option>
          <option>Rua B, 456</option>
        </select>
      </div>

      <h3 className={styles.subTitle}>Serviços Pedidos</h3>

      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Nome do prestador de serviços</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Subtotal de serviços</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.servicoInfo}>
              <img
                src="https://blog.1doc.com.br/wp-content/uploads/2025/05/ordem-de-servico-676x375.jpg"
                alt="Serviço"
              />
              <span>Descrição do serviço</span>
            </td>
            <td>R$ 10,00</td>
            <td>1</td>
            <td>R$ 10,00</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.pagamentoContainer}>
        <div className={styles.metodo}>
          <h4>Método de pagamento:</h4>
          <div className={styles.opcoesPagamento}>
            <button>Google Pay</button>
            <button>Cartão 2 cartões</button>
            <button>Pix</button>
            <button>Cartão de crédito</button>
            <button>Cartão débito virtual</button>
            <button>Boleto bancário</button>
          </div>

          <h4>Opção de envio: Entrega padrão</h4>
          <p className={styles.entregaTexto}>Receba entre 12 e 15 de set</p>
        </div>

        <div className={styles.resumo}>
          <p>
            Total dos serviços <span>R$ 10,00</span>
          </p>
          <p>
            Total de Entrega <span>R$ 10,00</span>
          </p>
          <p className={styles.total}>
            Pagamento Total <span>R$ 17,00</span>
          </p>
          <button className={styles.botaoFinalizar}>Finalizar compra</button>
        </div>
      </div>
    </div>
    </div>
  );
}
