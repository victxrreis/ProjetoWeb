import logo from '../img/logo_itambe.png';

function Header() {
    return (
        <header>
            <figure>
                <img className="logo" src={logo} alt="Logo Itambé" />
            </figure>
            <nav className="menu">
                <ul>
                    <li><a href="#home"><n>HOME</n></a></li>
                    <li><a href="#selb"><n>SELBS</n></a></li>
                    <li><a href="#emprestimos"><n>EMPRÉSTIMOS</n></a></li>
                    <li><a href="#pedidos"><n>PEDIDOS</n></a></li>
                </ul>
            </nav>
            <input class="search" name="text" placeholder="Procurar..." type="search"></input>
        </header>
    );
}

export default Header;