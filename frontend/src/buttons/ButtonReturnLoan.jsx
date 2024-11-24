import React from "react";
import { Link } from "react-router-dom";

function ButtonReturnLoans() {
  return (
      <Link to="/emprestimos" className="addSelbButton">
        Devolver Tonner
      </Link>
  );
}

export default ButtonReturnLoans;