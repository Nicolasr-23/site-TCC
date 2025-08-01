import './VagaCard.css'
function VagaCard({ vaga }) {
  return ( 
     <div className="vaga-card">
      <h3>{vaga.titulo}</h3>
      <p><strong>Empresa:</strong>{vaga.empresa}</p>
      <p><strong>Descrição:</strong> {vaga.descricao}</p>
      <p><strong>Requisitos:</strong> {vaga.requisitos}</p>
      <a href={vaga.link} target="_blank" rel="noopener noreferrer">Saiba Mais</a>
    </div>
  );
}

export default VagaCard;