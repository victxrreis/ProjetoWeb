import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo_itambe.png';

function Header() {
    return (
        <header>
            <figure>
                <img className="logo" src={logo} alt="Logo Itambé" />
            </figure>
            <nav className="menu">
                <ul>
                    <li><Link to="/"><n>HOME</n></Link></li>
                    <li><Link to="/selbs"><n>SELBS</n></Link></li>
                    <li><Link to="/emprestimos"><n>EMPRÉSTIMOS</n></Link></li>
                    <li><Link to="/pedidos"><n>PEDIDOS</n></Link></li>
                </ul>
            </nav>
            <input className="search" name="text" placeholder="Procurar..." type="search"></input>
        </header>
    );
}

export default Header;