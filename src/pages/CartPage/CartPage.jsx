// CartPage.jsx
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import Cart from '../../components/Cart/Cart';
import MyNav from '../../components/MyNav/MyNav';
import Welcome from '../../components/Welcome/Welcome';
import { ThemeContext } from '../../context/ThemeContextProvider';

function CartPage() {
    const { cart } = useContext(SelectedBookContext);
    const { theme } = useContext(ThemeContext);

    return (
        <Container className={`border p-4 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light'}`}>
          
            {cart.length === 0 ? (
                <p>Il carrello è vuoto</p>
            ) : (
                <Cart />
            )}
        </Container>
    );
}

export default CartPage;
