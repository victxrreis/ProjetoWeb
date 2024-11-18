import React, { useState } from "react";
import SelbForm from "../forms/SelbForm";

function Footer() {
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
    };

    return (
        <footer>
            <button className="addSelbButton" onClick={handleClick}>
                + Adicionar Selb
            </button>
            {showForm && <SelbForm />}
        </footer>
    );
}

export default Footer;