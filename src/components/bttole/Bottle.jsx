import './bottle.css'
const Bottle = ({ bottle }) => {
    const { stock, seller, price, img, name } = bottle
    return (
        <div className='bottle-box'>
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h3>Price: {price}</h3>
            <h4>Seller: {seller} </h4>
            <p>Stock: {stock}</p>
        </div>
    );
};

export default Bottle;