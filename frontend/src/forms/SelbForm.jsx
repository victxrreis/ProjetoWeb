function SelbForm() {
    return (
      <form className="selbForm">
        <h2 className="FormTitle">Adicionar Selb</h2>

        <div className="textForm">
            <label htmlFor="selbValue">Selb Value</label>
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
                <input id="local" type="text" />
              </div>
  
              <div className="textForm">
                <label htmlFor="department">Department</label>
                <input id="department" type="text" />
              </div>
            </fieldset>
          </article>
  
          <article className="rightColumn">
            <fieldset>
              <legend>Tonner</legend>
              <div className="textForm">
                <label htmlFor="color">Color</label>
                <input id="color" type="text" />
              </div>
              
              <div className="textForm">
                <label htmlFor="model">Model</label>
                <input id="model" type="text" />
              </div>
            </fieldset>
          </article>
        </section>
  
        <div className="selbFormButtons">
          <button className="saveButtonForm">Salvar</button>
          <button className="cancelButtonForm">Cancelar</button>
        </div>
      </form>
    );
  }
  
  export default SelbForm;  