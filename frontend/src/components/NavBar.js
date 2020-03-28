import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <Navbar className="shadow-sm nav-bar" variant="light">
                <Navbar.Brand href="#"><span className="nav-brand-text">Lottery</span></Navbar.Brand>
                <Nav justify className="ml-auto w-50">
                    <Nav.Item>
                        <Nav.Link href="#"><span className="nav-entry-text">Lotteries</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#"><span className="nav-entry-text">My&nbsp;Coupons</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button className="nav-button"><span className="nav-log-in-text">LOG&nbsp;IN</span></Button>
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;