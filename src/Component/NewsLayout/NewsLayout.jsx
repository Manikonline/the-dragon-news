
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../../Shared/LeftNav/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
      <Header></Header>
            <Container>
      <Row>
        <Col lg={9}><Outlet></Outlet></Col>
        <Col lg={3}><h2><RightNav></RightNav></h2></Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;