// SingleBook.jsx
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import './SingleBook.css';
import { ThemeContext } from '../../context/ThemeContextProvider';
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import { useNavigate } from 'react-router-dom';

function SingleBook({ book, details }) {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();
    const { selected, setSelected, addToCart, cart } = useContext(SelectedBookContext);

    function handleSelected() {
        setSelected(selected === book.asin ? '' : book.asin);
    }

    // Controlla se il libro è già presente nel carrello
    const isBookInCart = cart.some(item => item.asin === book.asin);

    return (
        <>
            <Card style={{ height: '500px' }} className='my-3 border-4' border={selected === book.asin ? 'danger' : 'none'} bg={theme === 'dark' ? theme : 'principal'} text={theme === 'dark' ? 'white' : 'dark'}>
                <Card.Img variant="top" src={book.img} style={{ height: '220px', objectFit: 'contain', objectPosition: 'center', cursor: 'pointer' }} onClick={handleSelected} />
                <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
                    <div>
                        <Card.Title className='fs-6 text-ellipsis line-clamp'>{book.title}</Card.Title>
                        <Card.Text className='fw-bolder fs-6'>
                            Category: {book.category}
                        </Card.Text>
                        <Card.Text className='fw-bolder fs-5'>
                            {book.price.toFixed(2)}€
                        </Card.Text>
                    </div>
                    {!details && (
                        <>
                            <Button className='color-primary border border-none' onClick={() => navigate('/details/' + book.asin)}>Details</Button>
                            {!isBookInCart && <Button className='color-primary border border-none' onClick={() => addToCart(book)}>Aggiungi al carrello</Button>}
                            {isBookInCart && <Button className='color-primary border border-none' disabled>Già nel carrello</Button>}
                        </>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}

export { SingleBook }; // Esporta SingleBook come un'esportazione nominata
