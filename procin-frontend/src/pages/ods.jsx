import Nav from "../components/nav";
import NavInferior from "../components/navInferior";
import styles from "../style/ods.module.css";

// Importando todas as imagens
import ods1 from "../assets/ods1.jpg";
import ods2 from "../assets/ods2.jpg";
import ods3 from "../assets/ods3.jpg";
import ods4 from "../assets/ods4.jpg";
import ods5 from "../assets/ods5.jpg";
import ods6 from "../assets/ods6.jpg";
import ods7 from "../assets/ods7.jpg";
import ods8 from "../assets/ods8.png";
import ods9 from "../assets/ods9.png";
import ods10 from "../assets/ods10.png";
import ods11 from "../assets/ods11.png";
import ods12 from "../assets/ods12.png";
import ods13 from "../assets/ods13.png";
import ods14 from "../assets/ods14.png";
import ods15 from "../assets/ods15.png";
import ods16 from "../assets/ods16.png";
import ods17 from "../assets/ods17.png";

// Lista completa das 17 ODS com as imagens importadas
const listaODS = [
  { id: 1, nome: "Erradicação da Pobreza", descricao: "Acabar com a pobreza em todas as suas formas.", imagem: ods1 },
  { id: 2, nome: "Fome Zero e Agricultura Sustentável", descricao: "Acabar com a fome, alcançar segurança alimentar e agricultura sustentável.", imagem: ods2 },
  { id: 3, nome: "Saúde e Bem-Estar", descricao: "Assegurar uma vida saudável e promover o bem-estar para todos.", imagem: ods3 },
  { id: 4, nome: "Educação de Qualidade", descricao: "Assegurar educação inclusiva, equitativa e de qualidade.", imagem: ods4 },
  { id: 5, nome: "Igualdade de Gênero", descricao: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.", imagem: ods5 },
  { id: 6, nome: "Água Potável e Saneamento", descricao: "Assegurar disponibilidade e manejo sustentável da água e saneamento.", imagem: ods6 },
  { id: 7, nome: "Energia Limpa e Acessível", descricao: "Assegurar acesso confiável, sustentável e moderno à energia.", imagem: ods7 },
  { id: 8, nome: "Trabalho Decente e Crescimento Econômico", descricao: "Promover crescimento econômico sustentado e trabalho decente para todos.", imagem: ods8 },
  { id: 9, nome: "Indústria, Inovação e Infraestrutura", descricao: "Construir infraestrutura resiliente e promover industrialização inclusiva.", imagem: ods9 },
  { id: 10, nome: "Redução das Desigualdades", descricao: "Reduzir desigualdades dentro dos países e entre eles.", imagem: ods10 },
  { id: 11, nome: "Cidades e Comunidades Sustentáveis", descricao: "Tornar cidades inclusivas, seguras, resilientes e sustentáveis.", imagem: ods11 },
  { id: 12, nome: "Consumo e Produção Responsáveis", descricao: "Assegurar padrões de consumo e produção sustentáveis.", imagem: ods12 },
  { id: 13, nome: "Ação Contra a Mudança Global do Clima", descricao: "Tomar medidas urgentes para combater a mudança climática e seus impactos.", imagem: ods13 },
  { id: 14, nome: "Vida na Água", descricao: "Conservar e usar de forma sustentável os oceanos, mares e recursos marinhos.", imagem: ods14 },
  { id: 15, nome: "Vida Terrestre", descricao: "Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres.", imagem: ods15 },
  { id: 16, nome: "Paz, Justiça e Instituições Eficazes", descricao: "Promover sociedades pacíficas e inclusivas, acesso à justiça e instituições eficazes.", imagem: ods16 },
  { id: 17, nome: "Parcerias e Meios de Implementação", descricao: "Fortalecer a implementação e revitalizar a parceria global para o desenvolvimento sustentável.", imagem: ods17 },
];

export default function ODSEditar() {
  return (
    <>
      <Nav />
      <NavInferior />

      <main className={styles.wrapper}>
        <h2 className={styles.title}>O que são as ODS?</h2>
        <p className={styles.introducao}>
          As ODS's (Objetivos de Desenvolvimento Sustentável) foram estabelecidos pela ONU para guiar ações globais que promovam um futuro sustentável, justo e inclusivo. São 17 objetivos que abordam questões sociais, econômicas e ambientais.
        </p>

        <h2 className={styles.title}>Todas as ODS</h2>

        <div className={styles.odsContainer}>
          {listaODS.map((o) => (
            <div key={o.id} className={styles.odsCard}>
              {/* Texto da ODS em div */}
              <div className={styles.odsTexto}>
                <h3>{o.nome}</h3>
                <div className={styles.descricao}>{o.descricao}</div>
              </div>

              {/* Imagem da ODS */}
              <div className={styles.odsImagem}>
                <img src={o.imagem} alt={o.nome} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
