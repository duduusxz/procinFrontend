import React, { useState } from 'react';
import styles from '../style/tipoDeficiencia.module.css';
import deficienciaAuditiva from "../assets/Deficiencia_Auditiva.png";
import deficienciaMotora from "../assets/Deficiencia_Motora.png";
import deficienciaVisual from "../assets/Deficiencia_Visual.png";
import deficienciaCognitiva from "../assets/Deficiencia_Cognitiva.png";
import logoSoma from "../assets/logo_preta.png"; // Se estiver na mesma pasta
import { useNavigate } from 'react-router-dom';

const imagensDeficiencia = {
  visual: deficienciaVisual,
  auditiva: deficienciaAuditiva,
  motora: deficienciaMotora,
  cognitiva: deficienciaCognitiva
};

function TipoDeficiencia() {

  const navigate = useNavigate()
  
      function IrParaHome(){
        navigate("/")
      }

  const [selectedDeficiency, setSelectedDeficiency] = useState(null);
  const [medicalReport, setMedicalReport] = useState(null);

  const handleDeficiencySelect = (deficiencyType) => setSelectedDeficiency(deficiencyType);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setMedicalReport(file || null);
  };

  const handleRemoveReport = () => {
    setMedicalReport(null);
    document.getElementById('reportInput').value = '';
  };

  const handleSubmit = () => {
    console.log('Deficiência selecionada:', selectedDeficiency);
    console.log('Laudo médico:', medicalReport);
    alert('Dados enviados com sucesso!');
  };

  const renderReportPreview = () => {
    if (!medicalReport) return <span className={styles.noFile}>Nenhum arquivo anexado</span>;

    const fileUrl = URL.createObjectURL(medicalReport);

    return (
      <>
        <button className={styles.removeBtn} onClick={handleRemoveReport}>Remover</button>
        {medicalReport.type.startsWith('image/') ? (
          <img src={fileUrl} alt="Preview do Laudo" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        ) : medicalReport.type === 'application/pdf' ? (
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">{medicalReport.name}</a>
        ) : (
          <span>Formato não suportado</span>
        )}
      </>
    );
  };

  return (
    <>
      <img src={logoSoma} alt="Logo" className={styles.logo} onClick={IrParaHome}/>

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Selecione seu tipo de deficiência</h2>

        <div className={styles.iconsAndSelects}>
          {['visual', 'auditiva', 'motora', 'cognitiva'].map((type) => (
            <div key={type} className={styles.iconColumn}>
              <div className={styles.iconCircle}>
                <img src={imagensDeficiencia[type]} alt={type} />
              </div>
              <span className={styles.selectLabel}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
              <div
                className={`${styles.selectSquare} ${selectedDeficiency === type ? styles.selectSquareSelected : ''}`}
                onClick={() => handleDeficiencySelect(type)}
              ></div>
            </div>
          ))}
        </div>

        <div className={styles.medicalReport}>
          <h2>Laudo Médico</h2>
          <div className={styles.reportPreview}>
            {renderReportPreview()}
          </div>
          <label className={styles.uploadLabel}>
            <input type="file" accept="image/*,.pdf" id="reportInput" onChange={handleFileChange} />
            <span>Anexar Laudo</span>
          </label>
        </div>

        <button className={styles.btnEnviar} onClick={handleSubmit}>Enviar</button>
      </div>
      </div>
    </>
  );
}

export default TipoDeficiencia;