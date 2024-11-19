import React from 'react';
import { useNavigate } from 'react-router-dom';
import printerIcon from '../img/printerIcon.png';

function CardSelb() {
  const navigate = useNavigate();

  const handleCardSelect = () => {
    navigate('/selbEspecPrinter');
  };

  return (
    <nav className="cardMenu">
      <section className="card">
        <img className="cardMainIcon" src={printerIcon} alt="Icone Impressora" />

        <section className="cardInformation">
          <p className="cardTitle">IMP-0000</p>
          <p className="cardTitle">Selb</p>
        </section>

        <button className="selectCardButton" onClick={handleCardSelect}>Selecionar</button>
      </section>
    </nav>
  );
}

export default CardSelb;