import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { HiSun, HiMoon } from "react-icons/hi2";
import { ThemeContext } from '../../context/ThemeContextProvider';
import FormSearch from '../FormSearch/FormSearch';
import Welcome from '../Welcome/Welcome';

function MyNav({ hiddenSearch }) {
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className={`bg-${theme} shadow`} variant={theme}>
                <Container>
                    <div className='navbar-brand' style={{ color: 'rgb(255, 242, 0)', cursor: 'pointer' }} onClick={() => navigate('/')}> <img src='./crazylogorend.png' style={{ width: '100px' }} /> CrazyBook</div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/about">About</Link>
                            <Link className='nav-link' to="/browse">Browse</Link>
                            <Button as={Link} to="/cart" variant="primary">Cart</Button> {/* Pulsante per il carrello */}
                            <button className='btn'>
                                {theme === 'dark' ? <HiSun className='fs-3 text-light' onClick={() => setTheme((prev) => prev === 'dark' ? 'light' : 'dark')} /> : <HiMoon className='fs-3' onClick={() => setTheme((prev) => prev === 'dark' ? 'light' : 'dark')} />}
                            </button>
                        </Nav>
                        {hiddenSearch ?? <FormSearch />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Welcome />
        </>
    );
}

export default MyNav;
