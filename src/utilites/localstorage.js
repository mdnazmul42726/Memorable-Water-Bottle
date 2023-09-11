const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart');
    if (storedCardString) {
        return JSON.parse(storedCardString);
    } else {
        return [];
    }

}

const setLS = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}

const adToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    setLS(cart);
}

export { adToLS }