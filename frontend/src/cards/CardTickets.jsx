import ticketsIcon from '../img/ticketsIcon.png';

function CardTickets() {
    return (
        <>
            <section class="cardHeader">
                <img class="cardMainIcon" src={ticketsIcon} alt="Icone Pedidos" />
            </section>
		    <section class="cardInformation">
                <p class="cardTitle">Tonner</p>
                <p class="cardTitle">Selb</p>
            </section>
        </>
    );
}

export default CardTickets;