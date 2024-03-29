import React, { useContext } from 'react';
import { Button } from 'react-bootstrap'; // Importa Button da react-bootstrap
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';

function Cart() {
    const { cart, setSelected, cartItems, setCart, setCartItems } = useContext(SelectedBookContext);

    // Funzione per rimuovere un libro dal carrello
    const removeFromCart = (book) => {
        const updatedCart = cart.filter(item => item.asin !== book.asin);
        setSelected('');
        setCart(updatedCart);
        setCartItems(cartItems.filter(item => item !== book.asin)); // Rimuovi il libro da cartItems
    };

    return (
        <div>
            <h2>Carrello</h2>
            {cart.length === 0 ? (
                <p>Il carrello è vuoto</p>
            ) : (
                <ul>
                    {cart.map(book => (
                        <li key={book.asin} className="d-flex align-items-center justify-content-between my-2">
                            <div>
                                {book.title} - {book.price.toFixed(2)}€
                            </div>
                            <div>
                                <Button variant="danger" onClick={() => removeFromCart(book)}>Rimuovi</Button> 
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;

