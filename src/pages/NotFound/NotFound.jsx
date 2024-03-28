import React from 'react'
import '../NotFound/NotFound.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContextProvider';
import MyNav from '../../components/MyNav/MyNav';
import Footer from '../../components/Footer/Footer';


export default function NotFound() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <MyNav hiddenSearch />
            <div className={`page404 col-12 h-100 bg-img-${theme} bg-${theme === 'dark' ? 'dark' : 'white'}`}>
            <img className='page404'  src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1" />
            </div>
            <Footer />
        </>
    )
}