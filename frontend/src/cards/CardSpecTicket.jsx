import React from 'react';
import printerIcon from '../img/printerIcon.png';

function CardSpecsTickets() {
  return (
    <div className="container">
      <img className="iconeImpressora" src={printerIcon} alt="Ícone Impressora" />

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