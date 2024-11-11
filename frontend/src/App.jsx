import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CardSpecPrinter from "./cards/CardSpecPrinter";

import './css/Footer.css';
import './css/Header.css';
import './cards/css/CardSelb.css';
import './cards/css/CardLoans.css';
import './css/Main.css';
import './cards/css/Cards.css';
import './cards/css/CardSpecs.css';

function App() {
  return (
    <>
    <Header/>
    <CardSpecPrinter/>
    <Footer/>
    </>
  );
}

export default App;