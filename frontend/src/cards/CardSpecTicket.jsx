import React from 'react';
import ticketsIcon from '../img/ticketsIcon.png';

function CardSpecsTickets() {
  return (
    <div className="container">
      <img className="iconePedidos" src={ticketsIcon} alt="Icone Pedidos" />

      <div className="square">
        <h1 className="title">Pedido</h1>
        <p className="subtitle">Número:</p>
        <p className="subtitle">Tipo:</p>
        <p className="subtitle">Data:</p>
      </div>

      <div className="notificacaoContainer">
        <h1 className="title">Notificações</h1>
        <ul></ul>
      </div>
    </div>
  );
}

export default CardSpecsTickets;