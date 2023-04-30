
import moment from 'moment';

import logo from '../../assets/logo.png'
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const {user,logOut}=useContext(AuthContext)


 const handleLogOut=()=>{
  logOut();
 }

  return (
    <Container>
      <div>
        <div className='text-center'>
          <img src={logo} alt="" />
          <p className='text-secondey'><small>Journalism without feat or favour</small></p>
          <p className='font-bold'>{moment().format("dddd, MMMM Do ,YYYY, ")}</p>
        </div>
        <div className='d-flex p-1 bg-secondary text-white' >
          <Button variant="danger">latest</Button>
          <Marquee>
            I can be a React component, multiple React components, or just some text.
          </Marquee>
        </div>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            {
               user ? <> 
               <FaUserCircle></FaUserCircle> <Button onClick={handleLogOut}>LogOut</Button>
               </>:<> <Button variant="secondary"><Link to='/login'>Login</Link></Button></>
            }
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </Container>
  );
};

export default Header;