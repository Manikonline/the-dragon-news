
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightNav from '../../Shared/LeftNav/RightNav/RightNav';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={3}><h2><LeftNav></LeftNav></h2></Col>
        <Col lg={6}><Outlet></Outlet></Col>
        <Col lg={3}><h2><RightNav></RightNav></h2></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;