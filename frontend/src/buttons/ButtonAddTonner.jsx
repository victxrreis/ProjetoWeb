import React from "react";
import { Link } from "react-router-dom";

function ButtonAddTonner() {
  return (
      <Link to="/EditTonnerQtd" className="addSelbButton">
        Adicionar e Retirar Tonner
      </Link>
  );
}

export default ButtonAddTonner;