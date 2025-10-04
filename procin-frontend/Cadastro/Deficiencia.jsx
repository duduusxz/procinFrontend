import React, { useState } from 'react';
import './Deficiencia.css';

function Deficiencia(){
  const [selectedDeficiency, setSelectedDeficiency] = useState(null);
  const [medicalReport, setMedicalReport] = useState(null);

  const handleDeficiencySelect = (deficiencyType) => {
    setSelectedDeficiency(deficiencyType);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedicalReport(file);
    } else {
      setMedicalReport(null);
    }
  };

  const handleRemoveReport = () => {
    setMedicalReport(null);
    // Clear the file input visually if needed, though React state handles the logic
    document.getElementById('reportInput').value = '';
  };

  const handleSubmit = () => {
    // Lógica para enviar os dados (deficiência selecionada e laudo médico)
    console.log('Deficiência selecionada:', selectedDeficiency);
    console.log('Laudo médico:', medicalReport);
    alert('Dados enviados com sucesso!');
    // Aqui você pode adicionar a lógica para enviar para um backend ou navegar
  };

  const renderReportPreview = () => {
    if (!medicalReport) {
      return <span className="no-file">Nenhum arquivo anexado</span>;
    }

    const fileUrl = URL.createObjectURL(medicalReport);

    return (
      <>
        <button className="remove-btn" onClick={handleRemoveReport}>Remover</button>
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
      <header>
        <img src="Images/SOMA.png" alt="Logo" className="logo" />
      </header>

      <div className="container">
        <h2>Selecione seu tipo de deficiência</h2>

        <div className="icons-and-selects">
          <div className="icon-column">
            <div className="icon-circle">
              <img src="Images/Deficiencia_Visual.png" alt="Visual" />
            </div>
            <span className="select-label">Visual</span>
            <div
              className={`select-square ${selectedDeficiency === 'visual' ? 'selected' : ''}`}
              onClick={() => handleDeficiencySelect('visual')}
            ></div>
          </div>

          <div className="icon-column">
            <div className="icon-circle">
              <img src="Images/Deficiencia_Auditiva.png" alt="Auditiva" />
            </div>
            <span className="select-label">Auditiva</span>
            <div
              className={`select-square ${selectedDeficiency === 'auditiva' ? 'selected' : ''}`}
              onClick={() => handleDeficiencySelect('auditiva')}
            ></div>
          </div>

          <div className="icon-column">
            <div className="icon-circle">
              <img src="Images/Deficiencia_Motora.png" alt="Motora" />
            </div>
            <span className="select-label">Motora</span>
            <div
              className={`select-square ${selectedDeficiency === 'motora' ? 'selected' : ''}`}
              onClick={() => handleDeficiencySelect('motora')}
            ></div>
          </div>

          <div className="icon-column">
            <div className="icon-circle">
              <img src="Images/Deficiencia_Cognitiva.png" alt="Cognitiva" />
            </div>
            <span className="select-label">Cognitiva</span>
            <div
              className={`select-square ${selectedDeficiency === 'cognitiva' ? 'selected' : ''}`}
              onClick={() => handleDeficiencySelect('cognitiva')}
            ></div>
          </div>
        </div>

        <div className="medical-report">
          <h2>Laudo Médico</h2>
          <div className="report-preview" id="reportPreview">
            {renderReportPreview()}
          </div>
          <label className="upload-label">
            <input type="file" accept="image/*,.pdf" id="reportInput" onChange={handleFileChange} />
            <span>Anexar Laudo</span>
          </label>
        </div>

        <button className="btn-enviar" onClick={handleSubmit}>Enviar</button>
      </div>
    </>
  );
};

export default Deficiencia;
