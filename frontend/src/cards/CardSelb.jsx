import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import printerIcon from '../img/printerIcon.png';

function SelbList() {
  const [selbs, setSelbs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelbs = async () => {
        const response = await api.get('/selbs'); // Endpoint da API
        setSelbs(response.data); // Atualiza os dados
    };

    fetchSelbs();
  }, []);

  const handleCardSelect = (selbId) => {
    navigate(`/selbEspecPrinter/${selbId}`); // Navega para a página da Selb específica
  };

  if (!selbs || selbs.length === 0) {
    return (
      <div className="selbList">
        <p>Sem SELB's disponíveis</p>
      </div>
    );
  }

  return (
    <div className="selbList">
      {selbs.map((selb) => (
        <nav className="cardMenu" key={selb.id}>
          <section className="card">
            <img className="cardMainIcon" src={printerIcon} alt="Ícone de Impressora" />
            <section className="cardInformation">
              <p className="cardTitle">{selb.printer?.name || 'Nome da Impressora'}</p>
              <p className="cardTitle">{selb.selbValue}</p>
            </section>
            <button
              className="selectCardButton"
              onClick={() => handleCardSelect(selb.id)}
            >
              Selecionar
            </button>
          </section>
        </nav>
      ))}
    </div>
  );
}

export default SelbList;