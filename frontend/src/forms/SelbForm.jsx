import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SelbForm() {
  const navigate = useNavigate();
  const [selbValue, setSelbValue] = useState("");
  const [printer, setPrinter] = useState({ ip: "", local: "fabrica", department: "" });
  const [tonner, setTonner] = useState({ color: "colorido", model: "" });

  const handleCancel = () => {
    navigate("/selbs");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selbData = {
      selbValue,
      printer,
      tonner,
    };

    await api.post("/selbs", selbData);
    navigate("/selbs");
  };

  return (
    <form className="selbForm" onSubmit={handleSubmit}>
      <h2 className="FormTitle">Adicionar Selb</h2>

      <div className="textForm">
        <label htmlFor="selbValue">Selb</label>
        <input
          id="selbValue"
          type="text"
          value={selbValue}
          onChange={(e) => setSelbValue(e.target.value)}
        />
      </div>

      <section className="formSections">
        <article className="leftColumn">
          <fieldset>
            <legend>Impressora</legend>
            <div className="textForm">
              <label htmlFor="ip">IP</label>
              <input
                id="ip"
                type="text"
                value={printer.ip}
                onChange={(e) => setPrinter({ ...printer, ip: e.target.value })}
              />
            </div>

            <div className="textForm">
              <label htmlFor="local">Local</label>
              <select
                id="local"
                value={printer.local}
                onChange={(e) => setPrinter({ ...printer, local: e.target.value })}
              >
                <option value="fabrica">Fábrica</option>
                <option value="sede">Sede</option>
                <option value="filiais">Filiais</option>
              </select>
            </div>

            <div className="textForm">
              <label htmlFor="department">Departamento</label>
              <input
                id="department"
                type="text"
                value={printer.department}
                onChange={(e) => setPrinter({ ...printer, department: e.target.value })}
              />
            </div>
          </fieldset>
        </article>

        <article className="rightColumn">
          <fieldset>
            <legend>Tonner</legend>
            <div className="textForm">
              <label htmlFor="color">Cor</label>
              <select
                id="color"
                value={tonner.color}
                onChange={(e) => setTonner({ ...tonner, color: e.target.value })}
              >
                <option value="colorido">Colorido</option>
                <option value="pretoebranco">Preto e Branco</option>
              </select>
            </div>

            <div className="textForm">
              <label htmlFor="model">Modelo</label>
              <input
                id="model"
                type="text"
                value={tonner.model}
                onChange={(e) => setTonner({ ...tonner, model: e.target.value })}
              />
            </div>
          </fieldset>
        </article>
      </section>

      <div className="selbFormButtons">
        <button className="saveButtonForm" type="submit">
          Salvar
        </button>
        <button type="button" className="cancelButtonForm" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default SelbForm;