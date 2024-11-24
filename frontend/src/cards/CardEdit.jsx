import React, { useState } from 'react';

function CardEdit() {
    const [quantities, setQuantities] = useState([0, 0, 0, 0]);

    const increaseQuantity = (index) => {
        setQuantities(quantities.map((q, i) => (i === index ? q + 1 : q)));
    };

    const decreaseQuantity = (index) => {
        setQuantities(quantities.map((q, i) => (i === index && q > 0 ? q - 1 : q)));
    };

    return (
        <div className="editContainer">
            <div className="editCard">
                <button className="closeButton">X</button>
                <h1 className="title">Edição de Tonner</h1>

                <div className="quantityContainer">
                    <div className="sphere black"></div>
                    <button className="quantityButton" onClick={() => decreaseQuantity(0)}>-</button>
                    <span className="quantityText">{quantities[0]}</span>
                    <button className="quantityButton" onClick={() => increaseQuantity(0)}>+</button>
                </div>

                <div className="quantityContainer">
                    <div className="sphere blue"></div>
                    <button className="quantityButton" onClick={() => decreaseQuantity(1)}>-</button>
                    <span className="quantityText">{quantities[1]}</span>
                    <button className="quantityButton" onClick={() => increaseQuantity(1)}>+</button>
                </div>

                <div className="quantityContainer">
                    <div className="sphere yellow"></div>
                    <button className="quantityButton" onClick={() => decreaseQuantity(2)}>-</button>
                    <span className="quantityText">{quantities[2]}</span>
                    <button className="quantityButton" onClick={() => increaseQuantity(2)}>+</button>
                </div>

                <div className="quantityContainer">
                    <div className="sphere pink"></div>
                    <button className="quantityButton" onClick={() => decreaseQuantity(3)}>-</button>
                    <span className="quantityText">{quantities[3]}</span>
                    <button className="quantityButton" onClick={() => increaseQuantity(3)}>+</button>
                </div>

                <button className="confirmButton">Confirmar</button>
            </div>
        </div>
    );
}

export default CardEdit;