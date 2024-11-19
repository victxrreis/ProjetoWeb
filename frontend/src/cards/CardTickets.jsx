import React from 'react';
import { useNavigate } from 'react-router-dom';
import ticketsIcon from '../img/ticketsIcon.png';

function CardTickets() {
  const navigate = useNavigate();

  const handleCardSelect = () => {
    navigate('/selbEspecTickets');
  };

  return (
    <>
      <nav className="cardMenu">
        <section className="card">
          <img className="cardMainIcon" src={ticketsIcon} alt="Icone Pedidos" />
          <section className="cardInformation">
            <p className="cardTitle">Selb</p>
            <p className="cardTitle">Tipo</p>
          </section>
          <button className="selectCardButton" onClick={handleCardSelect}>Selecionar</button>
        </section>
      </nav>
    </>
  );
}

export default CardTickets;