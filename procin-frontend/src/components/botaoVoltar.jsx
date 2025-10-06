export default function BotaoVoltar() {
    return (
      <button onClick={() => window.history.back()} style={{ marginBottom: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', border: 'none', backgroundColor: '#4A90E2', color: 'white', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        Voltar
      </button>
    );
  }