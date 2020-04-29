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
                const page = AuthenticationService.lastPage == null || AuthenticationService.lastPage === '/login' ? '/' : AuthenticationService.lastPage;
                window.location.replace(page);
            })
            .catch(() => this.setState({hasLoginFailed: true}))
    };

    onKeyDown = event => {
        if (event.key === 'Enter')
            this.loginClicked();
    };

    render() {
        if (AuthenticationService.isUserLoggedIn())
            this.props.history.push('/');
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
                               onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"
                               onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
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