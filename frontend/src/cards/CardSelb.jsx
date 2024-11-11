import printerIcon from '../img/printerIcon.png';

function CardSelb() {
    return (
        <>
            <nav class="cardMenu">
	            <section class="card">

                    <img className="cardMainIcon" src={printerIcon} alt="Icone Impressora" />

		            <section class="cardInformation">
                        <p class="cardTitle">IMP-0000</p>
                        <p class="cardTitle">Selb</p>
                    </section>

                    
                    <button class="selectCardButton" onClick={() => { CardSpecPrinter(); }}>Selecionar</button>
	            </section>
            </nav>
        </>
    );
}

export default CardSelb;