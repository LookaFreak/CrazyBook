import MakeCards from "../MakeCards/MakeCards";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { SelectedBookContext } from '../../context/SelectedBookContextProvider';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";


function AllTheBooks({ allBooks }) {


    const { fantasy, horror, romance, scifi, history } = allBooks;
    const {selected} = useContext(SelectedBookContext);
    const {theme} = useContext(ThemeContext);


    return (
        <>
            {/* <FormSearch handlesubmit = {handlesubmit} handleInputSearch = {handleInputSearch} inputSearch = {inputSearch}/> */}
            <Container fluid>
                <Row className="">
                    <Col xs='12' lg='9'>
                        <MakeCards count={4} books={fantasy} />
                        <MakeCards count={4} books={horror} />
                        <MakeCards count={4} books={romance} />
                        <MakeCards count={4} books={scifi} />
                        <MakeCards count={4} books={history} />
                    </Col>
                    <Col xs='0' lg='3' className={`border-none rounded p-0 my-3 position-relative ${!selected ? 'bg-'+theme : ''}`}>
                        <CommentArea bookasin={selected}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default AllTheBooks;