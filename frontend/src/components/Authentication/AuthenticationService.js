import fetchClient from './fetchClient';

export const SESSION_USERNAME = 'username';
export const SESSION_TOKEN = 'token';

// export const SESSION_LAST_PAGE = 'lastPage';

class AuthenticationService {
    static lastPage;

    executeBasicAuthenticationService(username, password) {
        return fetchClient.get("basicauth",
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(SESSION_USERNAME, username);
        sessionStorage.setItem(SESSION_TOKEN, this.createBasicAuthToken(username, password));
    }

    logout() {
        sessionStorage.removeItem(SESSION_USERNAME);
        sessionStorage.removeItem(SESSION_TOKEN);
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