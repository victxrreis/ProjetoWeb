import React from "react";
import { Link } from "react-router-dom";  // Importando Link do react-router-dom

function Footer() {
  return (
    <footer>
      <Link to="/forms" className="addSelbButton">
        + Adicionar Selb
      </Link>
    </footer>
  );
}

export default Footer;