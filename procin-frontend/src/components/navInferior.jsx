import styles from "../style/home.module.css"
import { useNavigate } from "react-router-dom";

export default function NavInferior(){

    
      const navigate = useNavigate();
        function IrParaOds() {
    navigate("/ods");
  }

    return(
        <nav className={styles.navInferior}>
                <div>
                    <p>Tem no soma</p>
                    <p>Serviços</p>
                    <p>Produtos</p>
                    <p>Meus pedidos</p>
                    <p onClick={IrParaOds}>ODS's</p>
                </div>
        </nav>
    )
}