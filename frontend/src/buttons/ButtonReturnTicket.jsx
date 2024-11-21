import React from "react";
import { Link } from "react-router-dom";

function ButtonReturnTicket() {
  return (
      <Link to="/pedidos" className="addSelbButton">
        Pedido Entregue
      </Link>
  );
}

export default ButtonReturnTicket;