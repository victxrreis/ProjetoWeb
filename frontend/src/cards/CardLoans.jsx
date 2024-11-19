import React from 'react';
import { useNavigate } from 'react-router-dom';
import loansIcon from '../img/loansIcon.png';

function CardLoans() {
  const navigate = useNavigate();

  const handleCardSelect = () => {
    navigate('/selbEspecLoans');
  };

  return (
    <nav className="cardMenu">
      <section className="card">
        <img className="cardMainIcon" src={loansIcon} alt="Icone Emprestimos" />

        <section className="cardInformation">
          <p className="cardTitle">Selb 1</p>
          <p className="cardTitle">Selb 2</p>
        </section>

        <button className="selectCardButton" onClick={handleCardSelect}>Selecionar</button>
      </section>
    </nav>
  );
}

export default CardLoans;