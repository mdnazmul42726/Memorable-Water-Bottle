import './bottle.css'
const Bottle = ({ bottle, cardBtnHandleClick }) => {
    const { stock, seller, price, img, name } = bottle
    return (
        <div className='bottle-box'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h3>Price: {price}</h3>
            <h4>Seller: {seller} </h4>
            <p>Stock: {stock}</p>
            <button onClick={() => cardBtnHandleClick(bottle)}>Add To Card</button>
        </div>
    );
};

export default Bottle;