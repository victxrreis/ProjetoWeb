import React from "react";
import { Link } from "react-router-dom";

function ButtonTickets() {
  return (
      <Link to="/AddSelbform" className="addSelbButton">
        Suporte e Pedidos
      </Link>
  );
}

export default ButtonTickets;