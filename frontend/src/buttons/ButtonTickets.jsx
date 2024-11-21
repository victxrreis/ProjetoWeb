import React from "react";
import { Link } from "react-router-dom";

function ButtonTickets() {
  return (
      <Link to="/pedidos" className="addSelbButton">
        Suporte e Pedidos
      </Link>
  );
}

export default ButtonTickets;