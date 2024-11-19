import React from "react";
import { Link, useLocation } from "react-router-dom";
import FooterCard from "./FooterCard";
import FooterSpecsSelb from "./FooterSpecsSelb";

function Footer() {
  const location = useLocation();

  let footerContent;

  if (location.pathname === "/selbs") {
    footerContent = <FooterCard />;
  } else if (location.pathname === "/selbEspecPrinter") {
    footerContent = <FooterSpecsSelb />;
  } else if (location.pathname === "/selbEspecLoans") {
    footerContent = <FooterSpecsSelb />;
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