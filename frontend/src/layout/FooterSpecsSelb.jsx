import React from "react";
import { Link } from "react-router-dom";
import ButtonLoans from "../buttons/ButtonLoans";
import ButtonAddTonner from "../buttons/ButtonAddTonner";
import ButtonTickets from "../buttons/ButtonTickets";

function FooterSpecsSelb() {
  return (
    <footer>
      <ButtonLoans />
      <ButtonAddTonner />
      <ButtonTickets />
    </footer>
  );
}

export default FooterSpecsSelb;