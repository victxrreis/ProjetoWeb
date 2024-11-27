import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import printerIcon from '../img/printerIcon.png';
import api from '../services/api';

function CardSpecPrinter() {
  const { id } = useParams(); // Pega o 'id' da URL
  const [printer, setPrinter] = useState(null);
  const [tonner, setTonner] = useState(null);
  const [selbs, setSelbs] = useState([]);

  useEffect(() => {
    const fetchSelbs = async () => {
        const response = await api.get(`/selbEspecPrinter/${id}`); // Endpoint da API
        setPrinter(response.data.printer); // Atualiza os dados de impressora
        setTonner(response.data.tonner);   // Atualiza os dados de tonner
        setSelbs(response.data);
    };

    if (id) {
      fetchSelbs(); // Executa apenas se o id for válido
    }

  }, [id]); // Incluído o `id` como dependência para refazer a requisição quando mudar

  // Verifique se os dados foram carregados antes de renderizar
  if (!printer || !tonner) {
    return <div>Carregando...</div>; // Pode colocar um carregando ou algo similar enquanto os dados são buscados
  }

  return (
    <div className="container">
      <img className="iconeImpressora" src={printerIcon} alt="Printer Icon" />

      <div className="square">
        <h1 className="title">Impressora</h1>
        <p className="subtitle">IP: {selbs.printer.ip || 'IP não disponível'}</p>
        <p className="subtitle">Local: {printer.local || 'Local não disponível'}</p>
        <p className="subtitle">Setor: {printer.department || 'Setor não disponível'}</p>
        <p className="subtitle">Nome: {printer.name || 'Nome não disponível'}</p>

        <h1 className="title">Tonner</h1>
        <p className="subtitle">Modelo: {tonner?.model || 'Modelo não disponível'}</p>

        <div className="colorContainer">
          <p className="color">Preto: {tonner?.color === 'Preto' ? tonner.quantity : 0}</p>
          <p className="color">Ciano: {tonner?.color === 'Ciano' ? tonner.quantity : 0}</p>
          <p className="color">Amarelo: {tonner?.color === 'Amarelo' ? tonner.quantity : 0}</p>
          <p className="color">Magenta: {tonner?.color === 'Magenta' ? tonner.quantity : 0}</p>
        </div>
      </div>

      <div className="notificacaoContainer">
        <h1 className="title">Notificações</h1>
        <ul>{/* Adicione notificações dinamicamente aqui */}</ul>
      </div>
    </div>
  );
}

export default CardSpecPrinter;