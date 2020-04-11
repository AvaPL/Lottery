import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
import './NavBar.css'
import AuthenticationService from "../Authentication/AuthenticationService";

class NavBar extends Component {

    render() {
        return (
            <Navbar className="shadow-sm nav-bar" variant="light">
                <Navbar.Brand href="/"><span className="nav-brand-text">Lottery</span></Navbar.Brand>
                <Nav justify className="ml-auto w-75">
                    <Nav.Item>
                        <Nav.Link href="/lotteries"><span className="nav-entry-text">LOTTERIES</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/latest-draws"><span
                            className="nav-entry-text">LATEST&nbsp;DRAWS</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/my-coupons"><span className="nav-entry-text">MY&nbsp;COUPONS</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        {AuthenticationService.isUserLoggedIn() ?
                            <Nav.Link href="/">
                                <Button className="nav-button" onClick={AuthenticationService.logout}><span
                                className="nav-log-in-text">LOG&nbsp;OUT</span></Button>
                            </Nav.Link> :
                            <Nav.Link href="/login">
                                <Button className="nav-button"><span
                                className="nav-log-in-text">LOG&nbsp;IN</span></Button>
                            </Nav.Link>}
                    </Nav.Item>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;