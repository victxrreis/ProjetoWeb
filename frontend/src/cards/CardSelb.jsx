import printerIcon from '../img/printerIcon.png';
import CardSpecs from './CardSpecs';

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

                    
                    <button class="selectCardButton" onClick={() => { CardSpecs(); }}>Selecionar</button>
	            </section>
            </nav>
        </>
    );
}

export default CardSelb;