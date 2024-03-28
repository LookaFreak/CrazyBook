import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { ThemeContext } from "../../context/ThemeContextProvider";

function Footer() {
    const { theme } = useContext(ThemeContext);

    const footerStyle = {
        backgroundColor: theme === 'dark' ? '#333' : '#f4f4f4',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <h6>© 2024 CrazyBook - Sviluppato da Alessandro Camarda</h6>
                <ul className="list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Servizi</a></li>
                    <li><a href="#">Contattaci</a></li>
                    <li><Link to="/not-found">NotFound</Link></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
