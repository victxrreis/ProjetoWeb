import printerIcon from '../img/printerIcon.png';

function CardSelb() {
    return (
        <>
            <nav class="selbCardMenu">
	            <section class="selbCard">
                    <img className="printerIcon" src={printerIcon} alt="Icone Impressora" />
		            <section class="selbInformation">
                        <p class="cardTitle">IMP-0000</p>
                        <p class="cardTitle">Selb</p>
                    </section>
                    <button class="selectSelbButton">Selecionar</button>
	            </section>
            </nav>
        </>
    );
}

export default CardSelb;