import React from "react";
import { Link } from "react-router-dom";

function FooterCard() {
  return (
      <Link to="/AddSelbform" className="addSelbButton">
        + Adicionar Selb
      </Link>
  );
}

export default FooterCard;