import printerIcon from '../img/printerIcon.png';

function CardSpecPrinter() {
    return (
        <div className="container">
            
            <img className="iconeImpressora" src={printerIcon}/>

            <div className="square">
                <h1 className="title">Impressora</h1>
                <p className="subtitle">IP:</p>
                <p className="subtitle">Local:</p>
                <p className="subtitle">Setor:</p>
                <p className="subtitle">Cor:</p>

                <h1 className="title">Tonner</h1>
                <p className="subtitle">Modelo:</p>

                <div className="colorContainer">
                    <p className="color">Preto</p>
                    <p className="color" id="1">0</p>
                    <p className="color">Ciano</p>
                    <p className="color" id="2">0</p>
                    <p className="color">Amarelo</p>
                    <p className="color" id="3">0</p>
                    <p className="color">Magenta</p>
                    <p className="color" id="4">0</p>
                </div>
            </div>

            <div className="notificacaoContainer">
                <h1 className="title">Notificações</h1>
                <ul></ul>
            </div>
        </div>
    );
}

export default CardSpecPrinter;