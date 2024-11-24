import React from "react";
import { useNavigate } from "react-router-dom";

function SelbForm() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/selbs");
  };

  return (
    <form className="selbForm">
      <h2 className="FormTitle">Adicionar Selb</h2>

      <div className="textForm">
        <label htmlFor="selbValue">Selb</label>
        <input id="selbValue" type="text" />
      </div>

      <section className="formSections">
        <article className="leftColumn">
          <fieldset>
            <legend>Impressora</legend>  
            <div className="textForm">
              <label htmlFor="ip">IP</label>
              <input id="ip" type="text" />
            </div>

            <div className="textForm">
              <label htmlFor="local">Local</label>
              <select id="local">
                <option value="fabrica">Fábrica</option>
                <option value="sede">Sede</option>
                <option value="filiais">Filiais</option>
              </select>
            </div>


            <div className="textForm">
              <label htmlFor="department">Departamento</label>
              <input id="department" type="text" />
            </div>
          </fieldset>
        </article>

        <article className="rightColumn">
          <fieldset>
            <legend>Tonner</legend>
            <div className="textForm">
              <label htmlFor="color">Cor</label>
              <select id="color">
                <option value="colorido">Colorido</option>
                <option value="pretoebranco">Preto e Branco</option>
              </select>
            </div>

            <div className="textForm">
              <label htmlFor="model">Modelo</label>
              <input id="model" type="text" />
            </div>
          </fieldset>
        </article>
      </section>

      <div className="selbFormButtons">
        <button className="saveButtonForm">Salvar</button>
        <button type="button" className="cancelButtonForm" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
}

export default SelbForm;