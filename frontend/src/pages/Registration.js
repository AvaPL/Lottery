import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Registration.css";

class Registration extends Component {

    handleChange = () => {
    };

    onKeyDown = () => {
    };


    render() {
        return (
            <div>
                <div className="authentication-header-box">
                    <span className="authentication-text">REGISTRATION</span>
                </div>
                <div className="authentication-body">
                    <Container fluid>
                        <Row>
                            {/*{this.state.isUsernameTaken && <div className="alert alert-warning">Username already exists</div>}*/}
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="repeatPassword">Repeat password</label>
                                    <input type="password" className="form-control" id="repeatPassword"
                                           placeholder="Repeat password"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                            </Col>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="creditCardNumber">Credit card number</label>
                                    <input type="text" className="form-control" id="creditCardNumber"
                                           placeholder="Credit card number"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="creditCardExpirationDate">Credit card expiration date</label>
                                    <input type="text" className="form-control" id="creditCardExpirationDate"
                                           placeholder="MM/YY"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" className="form-control" id="cvv" placeholder="CVV"
                                           onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                                </div>
                                <Button type="submit" className="btn-primary register-button"
                                        onClick={this.loginClicked}>REGISTER</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Registration;