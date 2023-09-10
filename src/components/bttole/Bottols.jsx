import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './bottles.css'

const Bottols = () => {

    const [bottols, setBottols] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, []);


    return (
        <div>
            <div className="bottle-container">
            {
                bottols.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottols;