import CardTickets from "./CardTickets";

function Cards() {
    return (
        <>
            <nav class="cardMenu">
	            <section class="card">

                    {CardTickets()}

                    <button class="selectCardButton">Selecionar</button>
	            </section>
            </nav>
        </>
    );
}

export default Cards;