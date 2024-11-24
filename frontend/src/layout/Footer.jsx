import React from "react";
import { Link, useLocation } from "react-router-dom";
import FooterCard from "./FooterCard";
import FooterSpecsSelb from "./FooterSpecsSelb";
import FooterSpecsLoans from "./FooterSpecsLoans";
import FooterSpecsTickets from "./FooterSpecsTickets";

function Footer() {
  const location = useLocation();

  let footerContent;

  if (location.pathname === "/selbs") {
    footerContent = <FooterCard />;
  } else if (location.pathname === "/selbEspecPrinter") {
    footerContent = <FooterSpecsSelb />;
  } else if (location.pathname === "/selbEspecLoans") {
    footerContent = <FooterSpecsLoans />;
  } else if (location.pathname === "/selbEspecTickets") {
    footerContent = <FooterSpecsTickets />;
  } else {
    footerContent = (
      <Link to="/forms" className="addSelbButton">
        Voltar
      </Link>
    );
  }

  return <footer>{footerContent}</footer>;
}

export default Footer;