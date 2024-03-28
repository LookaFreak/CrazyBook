import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import SingleBook from '../../components/SingleBook/SingleBook';
import CommentArea from '../../components/CommentArea/CommentArea';
import MyNav from '../../components/MyNav/MyNav';
import Footer from '../../components/Footer/Footer';

export default function Details(props) {

    const { asin } = useParams();
    const { allBooks } = props;
    let resBook = null;





    for (const [key, value] of Object.entries(allBooks)) {
        for (const book of value) {
            if (book.asin === asin) {
                resBook = book;
            }
        }
    }



    console.log(resBook)
    return (
        <>
            {
                resBook && <>
                    <MyNav hiddenSearch />
                    <Container className='p-5'>
                        {}
                        <SingleBook book={resBook} details />
                        <CommentArea bookasin={resBook.asin} />
                    </Container>
                    <Footer />
                </>
            }

            {
                !resBook && <>
                    <MyNav hiddenSearch />
                    <Container >
                        <h2 className='text-light text-center'>Nessun Risultato trovato</h2>
                    </Container>
                    <Footer />
                </>
            }
        </>
    )
}