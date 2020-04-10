import axios from 'axios';

export const SESSION = '';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get("http://localhost:8008/basicauth",
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(SESSION, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem(SESSION);
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem(SESSION);
        return user !== null;
    }

    getLoggedInUserName() {
        const user = sessionStorage.getItem(SESSION);
        if (user === null)
            return '';
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn())
                    config.headers.authorization = token;
                return config
            }
        )
    }
}

export default new AuthenticationService()