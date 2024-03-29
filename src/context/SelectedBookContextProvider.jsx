import React, { createContext, useState } from 'react';

export const SelectedBookContext = createContext(null);

const SelectedBookContextProvider = ({ children }) => {
    const [selected, setSelected] = useState('');
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        // Verifica se il libro è già presente nel carrello
        const isBookInCart = cart.find(item => item.asin === book.asin);

        // Se il libro è già nel carrello, non aggiungerlo di nuovo
        if (isBookInCart) {
            console.log("Il libro è già nel carrello.");
            return;
        }

        // Aggiungi il libro al carrello
        setCart([...cart, book]);
        setCartItems([...cartItems, book.asin]);
    };

    const removeFromCart = (book) => {
        const updatedCart = cart.filter(item => item.asin !== book.asin);
        setCart(updatedCart);
        setCartItems(cartItems.filter(item => item !== book.asin));
    };

    const value = {
        selected,
        setSelected,
        cart,
        setCart,
        cartItems,
        addToCart,
        removeFromCart,
        setCartItems
    };

    return (
        <SelectedBookContext.Provider value={value}>
            {children}
        </SelectedBookContext.Provider>
    );
};

export default SelectedBookContextProvider;
