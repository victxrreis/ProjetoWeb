import React from "react";
import { Link } from "react-router-dom";

function ButtonLoans() {
  return (
      <Link to="/emprestimos" className="addSelbButton">
        Devoluções e Empréstimos
      </Link>
  );
}

export default ButtonLoans;