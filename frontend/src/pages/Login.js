import React, {Component} from 'react';
import './Login.css'
import Button from "react-bootstrap/Button";
import AuthenticationService from "../components/Authentication/AuthenticationService";

class Login extends Component {
    state = {
        username: '',
        password: '',
        hasLoginFailed: false
    };

    handleChange = event => {
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        )
    };

    loginClicked = () => {
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                window.location.replace('/');
            })
            .catch(() => this.setState({hasLoginFailed: true}))
    };

    render() {
        return (
            <div>
                <div className="login-header-box">
                    <span className="login-text">LOG IN</span>
                </div>
                <div className="login-body">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Username"
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               onChange={this.handleChange}/>
                    </div>
                    <Button type="submit" className="btn-primary" onClick={this.loginClicked}>LOG IN</Button>
                    <a href={"/register"}><small className="form-text text-muted mt-3">New here? Register now, don't
                        miss a chance to win!</small></a>
                </div>
            </div>
        );
    }
}

export default Login;