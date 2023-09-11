import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './bottles.css'
import { adToLS } from "../../utilites/localstorage";

const Bottols = () => {

    const [bottols, setBottols] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, []);

    const cardBtnHandleClick = (bottle) => {
        const newCard = [...card, bottle];
        setCard(newCard)
        adToLS(bottle.id)
    }

    return (
        <div>
            <p>Card: {card.length} </p>
            <div className="bottle-container">

                {
                    bottols.map(bottle => <Bottle key={bottle.id} bottle={bottle} cardBtnHandleClick={cardBtnHandleClick}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottols;