import ticketsIcon from '../img/ticketsIcon.png';

function CardTickets() {
    return (
        <>
            <nav class="cardMenu">
	            <section class="card">

                    <img className="cardMainIcon" src={ticketsIcon} alt="Icone Pedidos" />

		            <section class="cardInformation">
                        <p class="cardTitle">IMP-0000</p>
                        <p class="cardTitle">Selb</p>
                    </section>

                    <button class="selectCardButton">Selecionar</button>
	            </section>
            </nav>
        </>
    );
}

export default CardTickets;