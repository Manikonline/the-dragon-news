import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './RightNav.css'
import QZone from "../../QZone";
import bg from '../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <div>
                <h2>Login With</h2>
                <Button className="button" variant="outline-primary"><FaGoogle /> Login with Google</Button>
                <Button className="button" variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>

            <div>
                <h4>Find Us on</h4>
                <ListGroup className="list-group">
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
                <div>
                    <QZone></QZone>
                </div>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>

    );
};

export default RightNav;