import loansIcon from '../img/loansIcon.png';

function CardLoans() {
    return (
        <>
            <nav class="cardMenu">
	            <section class="card">

                    <img className="cardMainIcon" src={loansIcon} alt="Icone Emprestimos" />

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

export default CardLoans;