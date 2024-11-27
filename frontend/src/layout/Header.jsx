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
                    <li><Link to="/"><span>HOME</span></Link></li>
                    <li><Link to="/selbs"><span>SELBS</span></Link></li>
                    <li><Link to="/emprestimos"><span>EMPRÉSTIMOS</span></Link></li>
                    <li><Link to="/pedidos"><span>PEDIDOS</span></Link></li>
                </ul>
            </nav>
            <input className="search" name="text" placeholder="Procurar..." type="search"></input>
        </header>
    );
}

export default Header;