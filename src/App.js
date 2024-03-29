import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyNav from './components/MyNav/MyNav';
import Welcome from './components/Welcome/Welcome';
import { ThemeContext } from './context/ThemeContextProvider';
import SelectedBookContextProvider from './context/SelectedBookContextProvider';
import Cart from './components/Cart/Cart';
import Homepage from './pages/Homepage/Homepage';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import SearchContextProvider, { SearchContext } from './context/SearchContextProvider';
import CartPage from './pages/CartPage/CartPage'; // Aggiungi l'import per CartPage


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import fantasyBook from './json/books/fantasy.json';
import historyBook from './json/books/history.json';
import horrorBook from './json/books/horror.json';
import romanceBook from './json/books/romance.json';
import scifiBook from './json/books/scifi.json';

function App() {
  const { theme } = useContext(ThemeContext);

  const { allBooks } = useContext(SearchContext);

  return (
    <Router>
      <SelectedBookContextProvider>
        <Container fluid className={`${theme === 'dark' ? 'bg-gradient' : 'bg-light'} m-0 p-0 d-flex flex-column justify-content-center`}>
          <MyNav />
          <Routes>
            <Route path="/" element={<Homepage allBooks={allBooks} />} />
            <Route path="/details/:asin" element={<Details allBooks={allBooks} />} />
            <Route path="/cart" element={<CartPage />} /> {/* Aggiungi la rotta per CartPage */}
    
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </SelectedBookContextProvider>
    </Router>
  );
}

export default App;
