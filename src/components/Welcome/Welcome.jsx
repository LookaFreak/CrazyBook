import React, { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import Alert from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Welcome/Welcome.css';
import Modal from 'react-bootstrap/Modal';

function Welcome() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [show,setShow] = useState(true);

    function hideMessage(){
        setTimeout(()=>{
            setShow(false);
        },3000)
    }
    return (
        <>
         
        
            <Container className='carousel-container'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.academyofeuphony.com/wp-content/uploads/2021/06/Edizioni-Accademia.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.mediaticacomunicazione.it/wp-content/uploads/2022/08/coem-organizzare-una-presentazione-di-un-libro.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.tormena.it/easyUp/eBanner/1_book-mockup-036_qnvx.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            {show && <Alert key= 'success' variant='success' className='w-75 mx-auto'>Benvenuto su CrazyBook! </Alert>}
            {hideMessage()}
        </>
    );
}

export default Welcome;
