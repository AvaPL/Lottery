import axios from 'axios';

export const SESSION_USERNAME = 'username';
// export const SESSION_LAST_PAGE = 'lastPage';

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get("http://localhost:8008/basicauth",
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(SESSION_USERNAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    logout() {
        sessionStorage.removeItem(SESSION_USERNAME);
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem(SESSION_USERNAME);
        return user !== null;
    }

    getLoggedInUserName() {
        const user = sessionStorage.getItem(SESSION_USERNAME);
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

    //TODO: Consider using this.
    //
    // setLastPage(page){
    //     sessionStorage.setItem(SESSION_LAST_PAGE, page);
    // }
    //
    // getLastPage(){
    //     const page = sessionStorage.getItem(SESSION_LAST_PAGE);
    //     sessionStorage.removeItem(SESSION_LAST_PAGE);
    //     return page;
    // }
}

export default new AuthenticationService()