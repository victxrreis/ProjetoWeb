import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import SelbForm from "./forms/SelbForm";

import CardSelb from "./cards/CardSelb";
import CardLoans from "./cards/CardLoans";
import CardTickets from "./cards/CardTickets";
import CardSpecPrinter from "./cards/CardSpecPrinter";
import CardSpecsLoans from "./cards/CardSpecLoans";
import CardSpecsTickets from "./cards/CardSpecTicket";
import CardEdit from "./cards/CardEdit";

import './css/Footer.css';
import './css/Header.css';
import './css/Main.css';
import './cards/css/Cards.css';
import './forms/css/SelbForm.css';
import './cards/css/CardEdit.css';
import './cards/css/CardSpecs.css';
import './buttons/css/Buttons.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selbs" element={<CardSelb />} />
          <Route path="/emprestimos" element={<CardLoans />} />
          <Route path="/pedidos" element={<CardTickets />} />
          <Route path="/AddSelbform" element={<SelbForm />} />
          <Route path="/selbEspecPrinter" element={<CardSpecPrinter />} />
          <Route path="/selbEspecLoans" element={<CardSpecsLoans />} />
          <Route path="/selbEspecTickets" element={<CardSpecsTickets />} />
          <Route path="/EditTonnerQtd" element={<CardEdit />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;