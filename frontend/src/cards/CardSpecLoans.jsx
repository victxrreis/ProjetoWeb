import React from 'react';
import loansIcon from '../img/loansIcon.png';

function CardSpecsLoans() {
  return (
    <div className="container">
      <img className="iconeEmprestimo" src={loansIcon} alt="Icone Emprestimos" />

      <div className="square">
        <h1 className="title">Empréstimo</h1>
        <p className="subtitle">Selb fornecedor:</p>
        <p className="subtitle">Selb receptor:</p>
        <p className="subtitle">Data:</p>
        <p className="subtitle">Tonner (QT | COR):</p>
      </div>

      <div className="notificacaoContainer">
        <h1 className="title">Notificações</h1>
        <ul></ul>
      </div>
    </div>
  );
}

export default CardSpecsLoans;